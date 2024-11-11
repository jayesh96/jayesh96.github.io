import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getRandomDegree } from "../../utils";

let height = 0;

const horizontalLoop = (items, config, itemsClass, meta) => {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
            repeat: config.repeat,
            paused: config.paused,
            defaults: { ease: "none" },
            onReverseComplete: () =>
                tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        length = items.length,
        startY = items[0].offsetTop,
        times = [],
        heights = [],
        yPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
            config.snap === false
                ? (v) => v
                : gsap.utils.snap(config.snap || 1),
        populateHeights = () =>
            items.forEach((el, i) => {
                heights[i] = parseFloat(gsap.getProperty(el, "height", "px"));
                yPercents[i] = snap(
                    (parseFloat(gsap.getProperty(el, "y", "px")) / heights[i]) *
                        100 +
                        gsap.getProperty(el, "yPercent")
                );
            }),
        getTotalHeight = () =>
            items[length - 1].offsetTop +
            (yPercents[length - 1] / 100) * heights[length - 1] -
            startY +
            items[length - 1].offsetHeight *
                gsap.getProperty(items[length - 1], "scaleY") +
            (parseFloat(config.paddingBottom) || 0),
        totalHeight,
        curY,
        distanceToStart,
        distanceToLoop,
        item,
        i;

    populateHeights();

    gsap.set(items, {
        yPercent: (i) => yPercents[i],
    });

    gsap.set(items, { y: 0 });

    totalHeight = getTotalHeight();

    for (i = 0; i < length; i++) {
        item = items[i];
        curY = (yPercents[i] / 100) * heights[i];
        distanceToStart = item.offsetTop + curY - startY;
        distanceToLoop =
            distanceToStart + heights[i] * gsap.getProperty(item, "scaleY");
        tl.to(
            item,
            {
                yPercent: snap(((curY - distanceToLoop) / heights[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
            },
            0
        )
            .fromTo(
                item,
                {
                    yPercent: snap(
                        ((curY - distanceToLoop + totalHeight) / heights[i]) *
                            100
                    ),
                },
                {
                    yPercent: yPercents[i],
                    duration:
                        (curY - distanceToLoop + totalHeight - curY) /
                        pixelsPerSecond,
                    immediateRender: false,
                },
                distanceToLoop / pixelsPerSecond
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
            (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
            vars.modifiers = {
                time: gsap.utils.wrap(0, tl.duration()),
            };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.updateIndex = () => {
        curIndex = Math.round(tl.progress() * items.length);
        console.log(curIndex);
    };

    tl.times = times;
    tl.progress(1, true).progress(0, true);

    return tl;
};

const motion = (delay, loop, boxes, doRotation) => {
    let progressWrap = gsap.utils.wrap(0, 1);

    gsap.to(loop, {
        progress: `+=${delay * 0.0005}`,
        overwrite: true,
        modifiers: {
            progress: progressWrap,
        },
        onUpdate: () => {
            if (!doRotation) return;
            boxes.forEach((box) => {
                const currentRotation = gsap.getProperty(box, "rotation");
                let newRotation = currentRotation + (delay > 0 ? -0.5 : 0.5);

                if (newRotation < -15 || newRotation > 15) {
                    newRotation = getRandomDegree(0, 0);
                }
                gsap.to(box, { rotation: newRotation, duration: 1 });
            });
        },
    });
};

const run = (itemsClass, cb, meta, doRotation) => {
    const boxes = gsap.utils.toArray(itemsClass);
    const loop = horizontalLoop(
        boxes,
        { paused: true, draggable: false },
        itemsClass,
        meta
    );

    // Event listener for mouse wheel
    document.addEventListener("wheel", (e) =>
        motion(e.deltaY, loop, boxes, doRotation)
    );

    // Variables for touch support
    let startY = 0;
    let currentY = 0;

    // Touchstart event to initialize the starting point
    document.addEventListener("touchstart", (e) => {
        if (e.touches && e.touches.length === 1) {
            startY = e.touches[0].clientY;
        }
    });

    // Touchmove event to calculate the distance and trigger motion
    document.addEventListener("touchmove", (e) => {
        if (e.touches && e.touches.length === 1) {
            currentY = e.touches[0].clientY;
            const deltaY = startY - currentY; // Calculate the difference
            motion(deltaY, loop); // Pass deltaY to the motion function
            startY = currentY; // Update startY to the current position for smooth movement
        }
    });

    // Touchend event to reset values
    document.addEventListener("touchend", () => {
        startY = 0;
        currentY = 0;
    });

    // Callback function
    cb();
};

export { horizontalLoop, run };

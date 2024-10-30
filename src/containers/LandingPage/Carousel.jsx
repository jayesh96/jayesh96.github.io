import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horizontalLoop } from "./utils";
import { getRandomDegree } from "../../utils";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

const images = [
    "https://d16tvu8s9o80e8.cloudfront.net/Student_App_c966538eaf.jpg",
    "https://d16tvu8s9o80e8.cloudfront.net/Humana_b6f0c4b99c.jpg",
    "https://d16tvu8s9o80e8.cloudfront.net/Student_App_c966538eaf.jpg",
    "https://d16tvu8s9o80e8.cloudfront.net/Barkyn_95fb47f9c4.jpg",
];

const Carousel = () => {
    const run = () => {
        const boxes = gsap.utils.toArray(".box");

        boxes.forEach((box) => {
            let newRotation = getRandomDegree(0, 15);
            gsap.to(box, { rotation: newRotation, duration: 1 });
        });

        const loop = horizontalLoop(boxes, { paused: true, draggable: true });

        boxes.forEach((box, i) =>
            box.addEventListener("click", () =>
                loop.toIndex(i, { duration: 0.8, ease: "power1.inOut" })
            )
        );

        let progressWrap = gsap.utils.wrap(0, 1);

        document.addEventListener("wheel", (e) => {
            loop.draggable.tween && loop.draggable.tween.kill();

            gsap.to(loop, {
                progress: `+=${e.deltaY * 0.001}`,
                overwrite: true,
                modifiers: {
                    progress: progressWrap,
                },
                onUpdate: () => {
                    // Change rotation dynamically on scroll with controlled small rotation changes
                    boxes.forEach((box) => {
                        const currentRotation = gsap.getProperty(
                            box,
                            "rotation"
                        );
                        // Increment/decrement rotation based on scroll direction
                        let newRotation =
                            currentRotation + (e.deltaY > 0 ? -1 : 1);

                        // console.log(newRotation);
                        if (newRotation < -15 || newRotation > 15) {
                            newRotation = getRandomDegree(0, 0);
                        }
                        gsap.to(box, { rotation: newRotation, duration: 1 });
                        // gsap.to(box, { scale: 1.1, duration: 0.2 });
                    });
                },
            });
        });

        gsap.set("#carousel", { scale: 1.5, duration: 1 });
        gsap.to("#carousel", { duration: 1, yPercent: -100 });
        gsap.to("#carousel", { duration: 1, scale: 1 });
        gsap.to("#carousel", { duration: 1, rotate: 5, delay: 1 });
    };
    useEffect(() => {
        run();
    }, []);

    return (
        <div id="carousel" className="flex justify-center items-center h-dvh">
            <div className="wrapper h-full md:w-3/4 xl:w-1/4  relative overflow-visible ">
                {images.map((x, index) => {
                    return (
                        <div className="box h-1/3 md:h-2/3  cursor-pointer p-8">
                            <img
                                src={x}
                                className="image"
                                style={{ rotate: "-9.5deg" }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;

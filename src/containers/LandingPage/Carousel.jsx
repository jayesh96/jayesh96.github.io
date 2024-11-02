import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horizontalLoop } from "./utils";
import { getRandomDegree } from "../../utils";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

const domain = "https://sunny-queijadas-ed4025.netlify.app/images/";

const images = [
    "jayesh.JPG",
    "experience.webp",
    "projects.webp",
    "hobbies.webp",
];

const TITLES = ["About Me", "Experience", "Projects", "Hobbies"];

const Carousel = () => {
    const run = () => {
        const boxes = gsap.utils.toArray(".box");

        boxes.forEach((box) => {
            let newRotation = getRandomDegree(0, 15);
            gsap.to(box, { rotation: newRotation, duration: 1 });
        });

        const loop = horizontalLoop(boxes, { paused: true, draggable: true });

        // boxes.forEach((box, i) =>
        //     box.addEventListener("click", () => console.log("Called!"))
        // );

        let progressWrap = gsap.utils.wrap(0, 1);

        const motion = (delay) => {
            loop.draggable.tween && loop.draggable.tween.kill();

            gsap.to(loop, {
                progress: `+=${delay * 0.001}`,
                overwrite: true,
                modifiers: {
                    progress: progressWrap,
                },
                onUpdate: () => {
                    boxes.forEach((box) => {
                        const currentRotation = gsap.getProperty(
                            box,
                            "rotation"
                        );
                        let newRotation =
                            currentRotation + (delay > 0 ? -1 : 1);

                        if (newRotation < -15 || newRotation > 15) {
                            newRotation = getRandomDegree(0, 0);
                        }
                        gsap.to(box, { rotation: newRotation, duration: 1 });
                    });
                },
            });
        };

        let touchstartX = 0;
        let touchendX = 0;

        document.addEventListener("touchstart", (e) => {
            touchstartX = e.changedTouches[0].screenX;
        });

        document.addEventListener("touchend", () => {
            touchendX = e.changedTouches[0].screenX;

            let deltaY = touchendX - touchstartX;
            motion(deltaY);
        });

        document.addEventListener("wheel", (e) => motion(e.deltaY));

        gsap.set("#carousel", { scale: 1.2, duration: 1 });
        gsap.to("#carousel", { rotate: -5 });

        gsap.to("#carousel", { duration: 1, yPercent: 10, delay: 0.1 });
        gsap.to("#carousel", { duration: 1, scale: 1 });
        gsap.to("#carousel", { duration: 0.5, rotate: 5, delay: 0.5 });
    };
    useEffect(() => {
        run();
    }, []);

    return (
        <>
            <div
                id="carousel"
                className="flex justify-center items-center h-dvh translate-y-3"
            >
                <div className="wrapper h-full md:w-3/4 xl:w-1/4  relative overflow-visible ">
                    {images.map((x, index) => {
                        return (
                            <>
                                <div className="box h-1/3 md:h-2/3  cursor-pointer p-4 md:p-8">
                                    <img
                                        src={domain + x}
                                        className="image"
                                        style={{ rotate: "-9.5deg" }}
                                    />
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Carousel;

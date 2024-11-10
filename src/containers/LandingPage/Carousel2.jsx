import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horizontalLoop } from "./utils";
import { getRandomDegree } from "../../utils";
import { COUNTRIES } from "./constants";
gsap.registerPlugin(ScrollTrigger, Draggable);

const domain = "https://sunny-queijadas-ed4025.netlify.app/images/";

const TiltedImageGallery = () => {
    const [imageDimensions, setImageDimensions] = useState({
        width: 300,
        height: 400,
    });

    const calculateResponsiveImageSize = () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Set width so three images fit across the container
        const newImageWidth = viewportWidth * 0.7; // 1/3rd of viewport width
        const newImageHeight = viewportWidth; // 20% more than width for a rectangular shape

        // Ensure the image dimensions stay within the viewport height
        setImageDimensions({
            width: newImageWidth,
            height: newImageHeight,
        });
    };

    const run = () => {
        const boxes = gsap.utils.toArray(".box");

        boxes.forEach((box) => {
            let newRotation = getRandomDegree(0, 15);
            gsap.to(box, { rotation: newRotation, duration: 1 });
        });

        const loop = horizontalLoop(boxes, { paused: true, draggable: true });

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

        document.addEventListener("touchstart", (e) => {
            const touchstartX = e.changedTouches[0].screenX;
            document.addEventListener("touchend", (e) => {
                const touchendX = e.changedTouches[0].screenX;
                const deltaY = touchendX - touchstartX;
                motion(deltaY);
            });
        });

        document.addEventListener("wheel", (e) => motion(e.deltaY));

        gsap.set("#carousel", { scale: 1.2, duration: 1 });
        gsap.to("#carousel", { duration: 1, yPercent: 10, delay: 0.1 });

        gsap.to("#carousel", { duration: 1, scale: 1 });
        gsap.to("#carousel", { duration: 0.5, rotate: 5, delay: 0.5 });
        gsap.to("#carousel", { rotate: -5 });
    };

    useEffect(() => {
        window.addEventListener("resize", calculateResponsiveImageSize);
        calculateResponsiveImageSize();
        run();

        return () =>
            window.removeEventListener("resize", calculateResponsiveImageSize);
    }, []);

    return (
        <div
            id="carousel"
            className="flex justify-center items-center h-dvh translate-y-3"
        >
            <div className="wrapper h-full relative overflow-visible">
                {COUNTRIES.map((country, index) => (
                    <div
                        key={index}
                        className="box"
                        style={{
                            height: `${imageDimensions.height}px`,
                            width: `${imageDimensions.width}px`,
                            maxWidth: "450px",
                            maxHeight: "600px",
                        }}
                    >
                        <img
                            src={`${domain}${country.url}`}
                            alt={`image-${index}`}
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                padding: "16px",
                                margin: "32px 0",
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TiltedImageGallery;

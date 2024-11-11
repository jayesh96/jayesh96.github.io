import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { run } from "./utils";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

const TITLES = [
    "India: A tapestry of timeless traditions, vibrant colors, and endless diversity.",
    "Land of vibrant markets, golden temples, and serene landscapes.",
    "Where futuristic skylines meet lush green spaces and cultural heritage.",
    "Malaysia: A tapestry of diverse cultures, stunning landscapes, and vibrant cities.",
    "An archipelago of breathtaking beaches, vibrant cultures, and ancient wonders.",
    "Where ancient traditions meet breathtaking natural beauty.",
    "Emerald landscapes, ancient castles, and timeless charm.",
    "Fields of vibrant tulips, iconic windmills, and charming canals.",
    "Germany: a blend of rich history, fairytale castles, and modern innovation.",
    "Majestic Alps, charming villages, and timeless cultural elegance.",
    "Where historic grandeur meets the tranquil flow of the Danube.",
    "Where historic grandeur meets the tranquil flow of the Danube.",
    "Where alpine beauty meets tranquil lakes and fairytale castles.",
    "A gem of the Adriatic with timeless charm and breathtaking coastal beauty.",
    "Majestic mountains, serene lakes, and charming alpine villages.",
    "A mosaic of art, history, and sun-drenched landscapes.",
    "The spiritual heart of Rome, rich in history, art, and devotion.",
];

const Titles = () => {
    const callback = () => {
        gsap.set("#info-container", { scale: 1.01 });
        gsap.to("#info-container", {
            scale: 1,
            opacity: 1,
            duration: 1,
            delay: 1,
        });
    };

    useEffect(() => {
        run(".info", callback);
    }, []);

    return (
        <div id="info-container" className="hidden lg:block">
            <div style={{ alignItems: "center" }}>
                {TITLES.map((title, index) => {
                    return (
                        <div className="info position-absolute overflow-hidden display-flex m-8">
                            <div
                                className="info-display flex flex-row"
                                style={{ justifyContent: "end" }}
                            >
                                <a href="#">
                                    <h2 className="">{title}</h2>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Titles;

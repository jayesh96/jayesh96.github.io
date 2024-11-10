import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { run } from "./utils";
import { COUNTRIES } from "./constants";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

const Titles = () => {
    const containerRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState("auto");

    useEffect(() => {
        if (containerRef.current) {
            // Get the computed font size of the container
            const computedStyle = getComputedStyle(containerRef.current);
            const fontSize = parseFloat(computedStyle.fontSize); // Convert font size to a number

            // Set the height based on the font size
            const multiplier = 5; // Adjust multiplier based on desired height relative to font size
            const height = fontSize * multiplier;

            console.log(height);
            setContainerHeight(height);
        }
    }, [containerRef.current]);

    const callback = () => {
        gsap.set("#titles-container", { scale: 1.2, duration: 1 });
        gsap.to("#titles-container", { duration: 1, scale: 1 });
    };

    useEffect(() => {
        run(".title", callback);
    }, []);

    return (
        <div
            className="absolute h-full w-full top-0 left-0 titles-container block"
            id="titles-container"
        >
            <div className="grid grid-cols-12 gap-x-5 absolute w-full titles w-full position-absolute left-0">
                <div className="col-start-2 col-end-11 md:col-start-3 md:col-end-8 row-start-1 row-end-auto position-relative display-block overflow-hidden title-container">
                    {COUNTRIES.map((country, index) => {
                        return (
                            <div className="title position-absolute h-100 w-100 overflow-hidden display-flex ">
                                <div className="title-display flex flex-row">
                                    {/* <div className="pt-2 mr-10">
                                        <span>
                                            {index < 9 ? 0 : ""}
                                            {index + 1}
                                        </span>
                                    </div> */}
                                    <a className="caveat-new " href="#">
                                        <h4 className="">{country.name}</h4>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Titles;

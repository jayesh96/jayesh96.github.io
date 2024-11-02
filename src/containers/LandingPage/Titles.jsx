import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { run } from "./utils";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

const TITLES = ["About Me", "Experience", "Projects", "Hobbies"];

const Titles = () => {
    const callback = () => {
        gsap.set("#titles-container", { scale: 1.2, duration: 1 });
        gsap.to("#titles-container", { duration: 1, scale: 1 });
    };

    useEffect(() => {
        run(".title", callback);
    }, []);

    return (
        <div
            className="absolute h-full w-full top-0 left-0 titles-container "
            id="titles-container"
        >
            <div className="grid grid-cols-12 gap-x-5 absolute w-full bottom-1/4 titles w-full position-absoluve left-0 bottom-4rem">
                <div className="title-container h-2/6 col-start-3 col-end-8 row-start-1 row-end-auto position-relative display-block overflow-hidden ">
                    {TITLES.map((title, index) => {
                        return (
                            <div className="title position-absolute h-100 w-100 overflow-hidden display-flex m-4">
                                <div className="title-display flex flex-row">
                                    <div className="pt-2 mr-10">
                                        <span>0{index + 1}</span>
                                    </div>
                                    <a
                                        className="text-9xl caveat-new "
                                        href="#"
                                    >
                                        <h4 className="">{title}</h4>
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

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORK = [
    {
        name: "HatchXR",
        // location: "Gurgaon, India",
        // description: ` Build awesome AR/VR experiences, all from your web
        //                 browser.`,
        image: "https://iili.io/2uBSDSp.md.png",
    },
    {
        name: "Hatch For Kids",
        // location: "Gurgaon, India",
        // description: `AR, VR, and 3D Coding for the Classroom. The most engaging way to teach Coding, Logic, and Math to kids.`,
        image: "https://iili.io/2uBSsVa.md.png",
    },
    {
        name: "Cayster DSO",
        // location: "USA, Remote",
        // description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "https://iili.io/2uBSrAP.md.png",
    },
    // {
    //     name: "Cayster Digital Twin",
    //     location: "USA, Remote",
    //     description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
    //     image: "",
    // },
    {
        name: "Bot104",
        // location: "USA, Remote",
        // description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "https://iili.io/2uBSSSV.md.png",
    },
    // {
    //     name: "Mindful Chrome Extension",
    //     location: "USA, Remote",
    //     description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
    //     image: "",
    // },
    // {
    //     name: "Cayster Mobile App",
    //     location: "USA, Remote",
    //     description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
    //     image: "",
    // },
    {
        name: "Rayo Web Accessibility",
        // location: "USA, Remote",
        // description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "https://iili.io/2uBU9DX.md.png",
    },

    {
        name: "Mindful",
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "https://iili.io/2uBUJxn.md.png",
    },

    {
        name: "KMIT EServices",
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "https://iili.io/2uBSmHN.md.png",
    },

    {
        name: "LetskiptheQ - Travel Journal",
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "https://iili.io/2uBSpRI.md.png",
    },

    {
        name: "Cayster App",
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "https://iili.io/2uBStlR.md.png",
    },

    {
        name: "Omniverse Digital Twin",
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "https://iili.io/2uBSZKv.md.png",
    },

    {
        name: "Hatch Workspace",
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "https://iili.io/2uBSLiJ.md.png",
    },
];

const StackScroller = ({ projectsRef }) => {
    const containerRef = useRef(null);

    const handleScroll = () => {
        const position = window.pageYOffset;

        if (position > 700) {
            window.removeEventListener("scroll", handleScroll);
            console.log(position, gsap, ScrollTrigger);
            if (containerRef.current) {
                const cards = gsap.utils.toArray(".card");
                const spacer = 10;
                const windowHeight = window.innerHeight;

                console.log(windowHeight);

                cards.forEach((card, index) => {
                    gsap.to(card, {
                        rotation: index % 2 === 0 ? index * -1 * 1 : index * 2, // Adjust rotation angle as needed
                        // delay: index * 0.1,
                        scale: 1,
                        scrollTrigger: {
                            trigger: card,
                            start: `top-=${index * spacer} top+=100px`,
                            endTrigger: ".pin-panel",
                            end: `bottom bottom-=30%`,
                            pin: true,
                            pinSpacing: false,
                            scrub: true, // Allows smooth rotation on scroll
                            markers: false,
                            id: `card-rotation-${index}`,
                            invalidateOnRefresh: true,
                        },
                    });
                });
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="min-h-screen pin-panel mb-48" ref={containerRef}>
            <div className={`cards`} ref={projectsRef}>
                {WORK.map((project) => {
                    return (
                        <div className="card">
                            <div className="absolute bg-black bg-opacity-0 hover:bg-opacity-60 z-10 h-full w-full rounded-2xl hover:cursor-pointer">
                                <p className="top-1/2 left-1/2 absolute opacity-0   url-icon text-sm">
                                    {project.name}
                                </p>
                                {/* <svg
                                    aria-hidden="true"
                                    height="18"
                                    version="1.0"
                                    viewBox="0 0 16 16"
                                    width="18"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                                    ></path>
                                </svg> */}
                            </div>

                            <img src={`${project.image}`} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default StackScroller;

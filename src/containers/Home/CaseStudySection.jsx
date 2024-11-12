import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORK = [
    {
        name: "HatchXR",
        location: "Gurgaon, India",
        description: ` Build awesome AR/VR experiences, all from your web
                        browser.`,
        image: "hatchxr",
    },
    {
        name: "Hatch For Kids",
        location: "Gurgaon, India",
        description: `AR, VR, and 3D Coding for the Classroom. The most engaging way to teach Coding, Logic, and Math to kids.`,
        image: "hatchkids",
    },
    {
        name: "Cayster DSO",
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "cayster",
    },
    // {
    //     name: "Cayster Digital Twin",
    //     location: "USA, Remote",
    //     description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
    //     image: "",
    // },
    {
        name: "Bot104",
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "bot104",
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
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "rayo",
    },

    {
        name: "Rayo Web Accessibility",
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "mindful",
    },

    {
        name: "Rayo Web Accessibility",
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "kmit",
    },

    {
        name: "Rayo Web Accessibility",
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "letskiptheQ",
    },

    {
        name: "Rayo Web Accessibility",
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "caysterapp",
    },

    {
        name: "Rayo Web Accessibility",
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "digitaltwin",
    },

    {
        name: "Rayo Web Accessibility",
        location: "USA, Remote",
        description: `Cayster’s technology connects devices and software for dental technology which enhances investments and improved patient care.`,
        image: "hatchworkspace",
    },
];

const StackScroller = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);
    const [allowScrolling, setAllowScrolling] = useState(true);

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
            <div className={`cards`}>
                {WORK.map((project) => {
                    return (
                        // <div className="flex flex-col md:flex-row items-center justify-between rounded-xl p-8  to-white shadow-lg max-w-6xl  w-full mb-16 card">
                        //     {/* Left Side - Text Content */}
                        //     <div className="flex flex-col max-w-md">
                        //         <h2 className="text-2xl font-semibold mb-2">
                        //             {project.name}
                        //         </h2>
                        //         <p className="text-gray-600 flex items-center mb-4">
                        //             <span
                        //                 role="img"
                        //                 aria-label="flag"
                        //                 className="mr-2"
                        //             >
                        //                 🇮🇳
                        //             </span>
                        //             {project.location}
                        //         </p>
                        //         <p className="text-gray-700 mb-6">
                        //             {project.description}
                        //         </p>
                        //         <button className="flex items-center text-sm font-semibold text-gray-700  px-4 py-2 rounded-full">
                        //             Read More
                        //             <span className="ml-2 text-xl">→</span>
                        //         </button>
                        //     </div>

                        //     {/* Right Side - Images */}
                        //     <div className="flex gap-4 mt-8 md:mt-0">
                        //         <img
                        //             src="https://via.placeholder.com/80x160" // Replace with actual image URL
                        //             alt="Screenshot 1"
                        //             className="w-20 h-40 rounded-lg shadow-lg"
                        //         />
                        //         <img
                        //             src="https://via.placeholder.com/160x300" // Replace with actual image URL
                        //             alt="Screenshot 2"
                        //             className="w-40 h-72 rounded-lg shadow-lg"
                        //         />
                        //         <img
                        //             src="https://via.placeholder.com/80x160" // Replace with actual image URL
                        //             alt="Screenshot 3"
                        //             className="w-20 h-40 rounded-lg shadow-lg"
                        //         />
                        //     </div>
                        // </div>
                        <div className="card">
                            <img
                                src={`src/assets/projects/${project.image}.png`}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default StackScroller;

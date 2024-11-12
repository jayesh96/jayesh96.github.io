import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TAGS = [
    {
        classList:
            "bg-green-200 text-green-800 px-3 py-1 rounded-lg md:text-2xl font-semibold sm:w-fit mb-8 md:mt-0",
        text: "👨‍💻 Full Stack Development",
    },
    {
        classList:
            "bg-red-200 text-red-800 px-3 py-1 rounded-lg md:text-2xl font-semibold sm:w-fit mb-8 md:mt-0",
        text: "📱 Hybrid Mobile Apps",
    },
    {
        classList:
            "bg-blue-200 text-blue-800 px-3 py-1 rounded-lg md:text-2xl font-semibold sm:w-fit mb-8 md:mt-0",
        text: "💡 Creative Designs",
    },
    {
        classList:
            "bg-orange-200 text-orange-800 px-6 py-1 rounded-lg md:text-2xl font-semibold sm:w-fit mb-8 md:mt-0",
        text: "🎨 AR/VR",
    },
    {
        classList:
            "bg-purple-200 text-purple-800 px-6 py-1 rounded-lg md:text-2xl font-semibold sm:w-fit mb-8 md:mt-0",
        text: "🎮 3D Game Development",
    },
];
const AnimatedPills = () => {
    const containerRef = useRef(null);
    const pillsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            pillsRef.current,
            {
                x: -100, // Starting position off-screen to the left
                opacity: 0, // Hidden initially
            },
            {
                x: 0,
                opacity: 1,
                stagger: 0.2, // Adds a slight delay between each pill’s animation
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%", // Starts when the container reaches 80% of viewport height
                    toggleActions: "play none none reverse", // Plays on scroll in, reverses on scroll out
                },
            }
        );
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex space-x-0 sm:space-x-4 mt-8 flex-wrap flex-col sm:flex-row items-start   "
        >
            {TAGS.map((pill, index) => (
                <div
                    key={index}
                    ref={(el) => (pillsRef.current[index] = el)}
                    className={pill.classList}
                >
                    {pill.text}
                </div>
            ))}
        </div>
    );
};

export default AnimatedPills;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedPills = ({ data, text }) => {
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
            className="flex gap-8 flex-wrap company-logos mt-16 justify-center items-center mb-32"
        >
            {data.map((c, index) => (
                <img
                    alt="Accel"
                    src={c.src}
                    ref={(el) => (pillsRef.current[index] = el)}
                />
            ))}

            <p className="text-gray-500 italic mb-2  caveat-new text-2xl">
                {text}
            </p>
        </div>
    );
};

export default AnimatedPills;

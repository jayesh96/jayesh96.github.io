// Preloader.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Preloader = () => {
    const preloaderRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        // GSAP Timeline for the animation
        const tl = gsap.timeline({
            defaults: { ease: "power3.inOut" },
            onComplete: () => {
                // Hide preloader after animation completes
                gsap.to(preloaderRef.current, {
                    duration: 0.8,
                    opacity: 0,
                    pointerEvents: "none",
                    delay: 0.5,
                });
            },
        });

        // Animate SVG logo paths
        tl.fromTo(
            logoRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1.5, delay: 0.5 }
        ).to(logoRef.current, {
            scale: 1.1,
            repeat: -1,
            yoyo: true,
            duration: 1.2,
        });
    }, []);

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
        >
            <svg
                ref={logoRef}
                className="w-24 h-24 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                {/* Replace with your logo path */}
                <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83.47-5.64-.48-7.19-2.53C8.23 15.21 10.5 14 13 14v5.93zm6.9-3.67c-1.44 1.73-3.77 2.45-6.03 2.02V14c1.64 0 3.1.81 4.03 2.02 1.73-1.44 2.45-3.77 2.02-6.03h-5.07c.4 1.03 1.51 1.93 2.62 1.93.34 0 .68-.05 1-.15V6.26c-1.11-.4-2.22-.4-3.33 0V10c-1.51 0-3.1-.81-4.03-2.02-1.73 1.44-2.45 3.77-2.02 6.03h5.07c-.4-1.03-1.51-1.93-2.62-1.93-.34 0-.68.05-1 .15V17.74c1.11.4 2.22.4 3.33 0V14c1.51 0 3.1.81 4.03 2.02 1.73-1.44 2.45-3.77 2.02-6.03h-5.07c.4 1.03 1.51 1.93 2.62 1.93.34 0 .68-.05 1-.15V6.26c-1.11-.4-2.22-.4-3.33 0V10c-1.51 0-3.1-.81-4.03-2.02-1.73 1.44-2.45 3.77-2.02 6.03h5.07c-.4-1.03-1.51-1.93-2.62-1.93-.34 0-.68.05-1 .15V17.74c1.11.4 2.22.4 3.33 0V10c-1.64 0-3.1-.81-4.03-2.02-1.73 1.44-2.45 3.77-2.02 6.03h5.07c.4-1.03 1.51-1.93 2.62-1.93.34 0 .68.05 1 .15V17.74z"
                />
            </svg>
        </div>
    );
};

export default Preloader;

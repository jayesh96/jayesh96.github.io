// NotFound.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const NotFound = () => {
    const errorRef = useRef(null);

    useEffect(() => {
        // GSAP animation for the "404" text
        gsap.fromTo(
            errorRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
        );
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-black text-center">
            <h1
                ref={errorRef}
                className="text-9xl font-bold text-red-500 tracking-widest mb-8"
            >
                404
            </h1>
            <p className="text-2xl mb-4 text-black">
                Oops! The page you’re looking for doesn’t exist.
            </p>
            <p className="text-lg mb-8">It might have been moved or deleted.</p>
            <Link
                to="/"
                className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 transition duration-300 text-white"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;

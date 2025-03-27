import React, { useEffect, useRef, useState } from "react";
import Header from "./Header"; // Adjust the import path as necessary
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import classNames from "classnames";

gsap.registerPlugin(useGSAP);

const Navbar = ({ scrollToSection, storyRef, projectsRef, hobbiesRef }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Check if the scroll position has reached or passed 100vh
            if (scrollPosition >= viewportHeight - 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`flex justify-between items-center p-4 z-50 top-0 ${
                isScrolled ? "w-full xl:w-1/2 md:sticky " : "w-full absolute "
            }`}
        >
            <div className="flex items-center space-x-2">
                <div className="text-sm available-for-work">
                    <div className="w-3 green-dot"></div> Open To Work
                </div>
            </div>
            <div className="hidden md:flex space-x-8 text-gray-600">
                <button
                    onClick={() => scrollToSection(storyRef)}
                    className="hover:text-gray-800 hover:font-bold navicon"
                >
                    Story
                </button>
                <button
                    onClick={() => scrollToSection(projectsRef)}
                    className="hover:text-gray-800 hover:font-bold navicon"
                >
                    Works
                </button>
                <button
                    onClick={() => scrollToSection(hobbiesRef)}
                    className="hover:text-gray-800 hover:font-bold navicon"
                >
                    Skills
                </button>
            </div>
            <button
                className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800"
                onClick={() => {
                    window.open("https://www.linkedin.com/in/jayesh-bidani/");
                }}
            >
                Say "Hello!"
            </button>
        </nav>
    );
};

export default Navbar;

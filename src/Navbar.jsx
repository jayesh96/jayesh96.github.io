import React, { useRef } from "react";
import Header from "./Header"; // Adjust the import path as necessary
import { gsap } from "gsap";

const Navbar = () => {
    const navbarRef = useRef(null);

    const toggleNavbar = () => {
        const navbar = navbarRef.current;

        if (navbar) {
            // Check the current position of the navbar
            if (
                navbar.style.transform === "translate(0px, 0px)" ||
                !navbar.style.transform
            ) {
                // Animate it up (out of view)
                gsap.to(navbar, {
                    y: "-74vH", // Move it up out of view
                    duration: 0.3,
                    ease: "power2.out",
                });
            } else {
                // Animate it down into view
                gsap.to(navbar, {
                    y: "0", // Move it down into view
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        }
    };

    return (
        <>
            <Header navbarRef={navbarRef} toggleNavbar={toggleNavbar} />
            <section className="header-btn">
                <button
                    style={{}}
                    onClick={toggleNavbar}
                    className="font-custom"
                >
                    CONTACT ME
                </button>
            </section>
        </>
    );
};

export default Navbar;

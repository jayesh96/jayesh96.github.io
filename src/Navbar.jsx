import React, { useEffect, useRef, useState } from "react";
import Header from "./Header"; // Adjust the import path as necessary
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
    const navbarRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const navBarTitle = useRef();

    const { contextSafe } = useGSAP({ scope: navBarTitle });

    const onMouseEnter = contextSafe(() => {
        gsap.to(".front", { y: "-100%", duration: 0.2, opacity: 0 });
        gsap.to(".back", { y: "-100%", duration: 0.2, opacity: 1 });
    });

    const onMouseLeave = contextSafe(() => {
        gsap.to(".front", { y: "0%", duration: 0.2, opacity: 1 });
        gsap.to(".back", { y: "0%", duration: 0.2, opacity: 0 });
    });

    // useGSAP(
    //     () => {
    //         // gsap code here...
    //         gsap.to(".box", { x: 360 }); // <-- automatically reverted
    //     },
    //     { scope: container }
    // );

    const toggleNavbar = () => {
        const navbar = navbarRef.current;
        setIsOpen(!isOpen);
        if (navbar) {
            // Check the current position of the navbar
            if (
                navbar.style.transform === "translate(0px, 0px)" ||
                !navbar.style.transform
            ) {
                // Animate it up (out of view)
                gsap.to(".front", { opacity: 0, duration: 0.3 });
                gsap.to(".back", { opacity: 1, duration: 0.3 });

                gsap.to(navbar, {
                    y: "-74vH", // Move it up out of view
                    duration: 0.3,
                    ease: "power2.out",
                });
                gsap.to(".back", { opacity: 1, duration: 0.3, delay: 0.3 });
                gsap.to(".front", { opacity: 0, duration: 0.3, delay: 0.3 });
            } else {
                // Animate it down into view
                gsap.to(".front", { opacity: 0, duration: 0.3 });
                gsap.to(".back", { opacity: 1, duration: 0.3 });

                gsap.to(navbar, {
                    y: "0", // Move it down into view
                    duration: 0.3,
                    ease: "power2.out",
                });

                gsap.to(".back", { opacity: 1, duration: 0.3, delay: 0.3 });
                gsap.to(".front", { opacity: 0, duration: 0.3, delay: 0.3 });
            }
        }
    };

    useEffect(() => {});
    return (
        <>
            <Header navbarRef={navbarRef} toggleNavbar={toggleNavbar} />
            <section className="header-btn flex z-50">
                <div
                    className="flex flex-col overflow-hidden "
                    ref={navBarTitle}
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={onMouseEnter}
                >
                    <button
                        onClick={toggleNavbar}
                        className="font-custom front"
                    >
                        {!isOpen ? "CONTACT ME" : "BACK"}
                    </button>
                    <button
                        onClick={toggleNavbar}
                        className="font-custom back opacity-0"
                    >
                        {!isOpen ? "CONTACT ME" : "BACK"}
                    </button>
                </div>

                <button onClick={toggleNavbar} className="font-custom">
                    <img
                        src={"src/assets/letskiptheQ-nobg.png"}
                        width={"100"}
                        height={"100"}
                    />
                </button>
            </section>
        </>
    );
};

export default Navbar;

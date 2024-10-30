import React, { useRef } from "react";

const Navbar = ({ navbarRef, toggleNavbar }) => {
    return (
        <div
            ref={navbarRef}
            className="z-10 bg-[var(--orange-dull)]  text-white fixed top-0 left-0 w-full p-2 "
            style={{
                transform: "translateY(-74vH)",
                transition: "transform 0.5s ease",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 92%)",
                height: "74vH",
            }}
        >
            <header
                className="text-black container h-full flex "
                style={{ margin: "auto" }}
            >
                <div className="flex flex-col md:flex-row h-full justify-center items-center w-full justify-between">
                    <div className="flex flex-col items-start w-full h-full justify-center">
                        <button
                            style={{}}
                            onClick={toggleNavbar}
                            className="mb-16"
                        >
                            SAY HELLO
                        </button>
                        <div>
                            {" "}
                            <p>CURRENTLY IN DELHI</p>
                            <p>(+91) 7678383708</p>
                            <p>JAYESH.BIDANI@GMAIL.COM</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end w-full h-full  justify-center">
                        <div className="text-7xl text-center m-8">
                            <h1>
                                SOMETHING <br /> IN MIND ?
                            </h1>
                        </div>

                        <ul className="flex flex-row">
                            <li className="mx-1">Linkedin</li>
                            <li className="mx-1">Github</li>
                            <li className="mx-1">Instagram</li>
                            <li className="mx-1">Medium</li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;

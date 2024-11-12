import React from "react";

const CallToActionCard = () => {
    return (
        <section className="flex bg-gradient-to-b from-white to-yellow-50 w-full p-4 md:p-16 text-center md:text-left callToAction">
            <div className="rounded-2xl w-full  lg:w-3/4  ">
                <h2 className="lg:text-6xl font-bold text-gray-900 mb-4">
                    I am ready to build some great projects!
                </h2>
                <p className="lg:text-6xl text-gray-900 mb-6">
                    Let's make it happen!✨
                </p>

                <button className="bg-black text-white py-2 px-6 rounded-full shadow-lg hover:bg-gray-800 transition duration-200">
                    Start a project
                </button>

                <div className=" mt-8 space-x-4 flex flex-row flex-wrap justify-center items-center md:justify-start w-full">
                    <div className="text-gray-600 text-sm">MailTo:</div>
                    <a
                        href="mailto:jayesh.bidani@gmail.com"
                        className="text-gray-900"
                    >
                        jayesh.bidani@gmail.com
                    </a>
                </div>

                <div className="flex mt-6 space-x-4 w-full">
                    <a
                        href="#"
                        className="p-2 rounded-full shadow-sm  transition duration-200 w-12"
                    >
                        {/* Replace with icon SVG */}
                        <span className="sr-only">Github</span>
                        <img
                            src="src/assets/projects/icons/github.svg"
                            alt="github"
                        />
                    </a>
                    <a
                        href="#"
                        className="p-2 rounded-full shadow-sm  transition duration-200 w-12"
                    >
                        {/* Replace with LinkedIn icon SVG */}
                        <span className="sr-only">LinkedIn</span>
                        <img
                            src="src/assets/projects/icons/linkedin.svg"
                            alt="LinkedIn"
                        />
                    </a>
                    <a
                        href="#"
                        className="p-2 rounded-full shadow-sm  transition duration-200 w-12"
                    >
                        {/* Replace with Instagram icon SVG */}
                        <span className="sr-only">Instagram</span>
                        <img
                            src="src/assets/projects/icons/instagram.svg"
                            alt="Instagram"
                        />
                    </a>
                    <a
                        href="#"
                        className="p-2 rounded-full shadow-sm  transition duration-200 w-12"
                    >
                        {/* Replace with icon SVG */}
                        <span className="sr-only">X</span>
                        <img
                            src="src/assets/projects/icons/x.svg"
                            alt="Dribbble"
                        />
                    </a>
                    <a
                        href="#"
                        className="p-2 rounded-full shadow-sm  transition duration-200 w-12"
                    >
                        {/* Replace with icon SVG */}
                        <span className="sr-only">Medium</span>
                        <img
                            src="src/assets/projects/icons/medium.svg"
                            alt="Dribbble"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToActionCard;

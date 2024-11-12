import React from "react";

const SOCIAL = [
    {
        name: "Gmail",
        src: "gmail",
        url: "mailto:jayesh.bidani@gmail.com",
    },
    {
        name: "Linkedin",
        src: "linkedin",
        url: "https://www.linkedin.com/in/jayesh-bidani/",
    },
    {
        name: "Github",
        src: "github",
        url: "https://github.com/jayesh96",
    },
    {
        name: "Instagram",
        src: "instagram",
        url: "https://www.instagram.com/jayesh.bidani/",
    },
    {
        name: "X",
        src: "x",
        url: "https://x.com/jai_bidani96",
    },
    {
        name: "Medium",
        src: "medium",
        url: "https://medium.com/@jayeshbidani",
    },
];
const CallToActionCard = () => {
    return (
        <section className="flex bg-gradient-to-b from-white to-yellow-50 w-full p-4 md:p-16 text-center md:text-left callToAction">
            <div className="rounded-2xl w-full  lg:w-3/4  ">
                <h2 className="lg:text-6xl font-bold text-gray-900 mb-4 ">
                    I am ready to build some great projects!
                </h2>
                <p className="lg:text-6xl text-gray-900 mb-6 caveat-new">
                    Let's make it happen!✨
                </p>

                <button className="bg-black text-white py-2 px-6 rounded-full shadow-lg hover:bg-gray-800 transition duration-200">
                    Download Resume (PDF)
                </button>

                {/* <div className=" mt-8 space-x-4 flex flex-col flex-wrap justify-start items-start md:justify-start w-full">
                    <a
                        href=""
                        className="text-gray-900"
                    >
                        jayesh.bidani@gmail.com
                    </a>
                    <a
                        href="mailto:jayesh.bidani@gmail.com"
                        className="text-gray-900"
                    >
                        +91-7678383708
                    </a>
                </div> */}

                <div className="flex mt-6 space-x-4 w-full">
                    {SOCIAL.map((social, index) => {
                        return (
                            <a
                                href={social.url}
                                className="p-2 rounded-full shadow-sm  opacity-80 transition duration-200 w-12 hover:opacity-1 hover:scale-110 social-icons"
                            >
                                {/* Replace with icon SVG */}
                                <span className="sr-only">{social.name}</span>
                                <img
                                    src={`src/assets/projects/icons/${social.src}.svg`}
                                    alt={social.name}
                                />
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CallToActionCard;

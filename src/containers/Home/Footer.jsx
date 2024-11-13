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
        <section className="flex flex-col w-full p-4 md:p-16 text-center md:text-left ">
            <div className="rounded-2xl ">
                <div className="flex mt-6 space-x-4 w-full flex-wrap">
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
                <button
                    className="bg-black mt-8 text-white py-2 px-6 rounded-full shadow-lg hover:bg-gray-800 transition duration-200"
                    onClick={() => {
                        window.open(
                            "https://docs.google.com/document/d/19NvDSOwKRctQOiB4mSthR0SzKerzw0HAG8g5SrBzpLQ/edit?usp=sharing"
                        );
                    }}
                >
                    Download Resume (PDF)
                </button>
            </div>
        </section>
    );
};

export default CallToActionCard;

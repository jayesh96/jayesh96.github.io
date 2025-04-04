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
                <p className="text-gray-500 italic my-8  caveat-new text-2xl">
                    Find me at
                </p>
                <div className="flex space-x-4 w-full flex-wrap">
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
                            "https://drive.google.com/file/d/1UOAviPDJESXE-T2yd6gSU0wLbhPUIBj0/view?usp=sharing"
                        );
                    }}
                >
                    Download Resume (PDF)
                </button>

                <div className="text-gray-600 mt-8">
                    <p className="text-gray-500 italic my-8  caveat-new text-2xl">
                        Connect or Schedule a call
                    </p>
                    <a href="mailto: jayesh.bidani@gmail.com">
                        jayesh.bidani@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToActionCard;

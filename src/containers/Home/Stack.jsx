import React from "react";
import ClapButton from "./Clap";

const CardLayout = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-white text-center mb-36 w-full">
            <p className="text-gray-500 italic mb-2 section-side-message caveat-new text-2xl">
                when I'm not out with my loved ones...
            </p>
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-32 mt-4 max-w-96">
                You'll catch me doing a combo of these
            </h1>

            <div className="flex space-x-6 flex-wrap items-center justify-center">
                <Card
                    title="Language I have worked in"
                    items={[
                        "Javascript",
                        "Java",
                        "Python",
                        "CPP",
                        "C",
                        "and more",
                    ]}
                    bgColor="bg-lime-100"
                    index={0}
                />
                <Card
                    title="for products in"
                    items={[
                        "AI",
                        "Marketing",
                        "A11y",
                        "MedTech",
                        "EdTech",
                        "and more",
                    ]}
                    bgColor="bg-purple-100"
                    index={1}
                />
                <Card
                    title="with support of"
                    items={[
                        "ReactJS",
                        "NodeJS",
                        "MongoDB",
                        "MySQL",
                        "ThreeJS",
                        "and many more",
                    ]}
                    index={2}
                    bgColor="bg-sky-100"
                />
            </div>
        </section>
    );
};

const Card = ({ title, items, bgColor, index }) => {
    return (
        <div
            className={`w-64 rounded-lg shadow-lg transform bg-white rotate-3  transition-all stack-${index} rounded-2xl `}
        >
            <div
                className={`text-xl font-semibold text-gray-700 ${bgColor}  rounded-tl-2xl rounded-tr-2xl pt-4 pb-4`}
            >
                {title}
            </div>
            <ul className="text-gray-700 text-left space-y-1 flex-wrap">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="text-lg p-1 "
                        style={{ borderBottom: "1px dashed black" }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardLayout;

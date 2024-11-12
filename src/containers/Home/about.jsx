import React from "react";
import Companies from "../../components/Companies";

const AboutSection = () => {
    return (
        <section className=" flex flex-col items-center justify-center py-16 px-8 bg-white w-full  min-h-screen">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full justify-between">
                {/* Polaroid Images */}
                <div className="flex gap-4">
                    <div className="relative transform hover:scale-105 transition duration-300 poloroid poloroid-first">
                        <img
                            src="https://iili.io/2Tkqaet.md.png" // Replace with actual image URL
                            alt="Polaroid 1"
                            className="w-48 h-64 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="relative transform hover:scale-105 transition duration-300 poloroid poloroid-second">
                        <img
                            src="https://iili.io/2Tkq1Xs.md.png" // Replace with actual image URL
                            alt="Polaroid 2"
                            className="w-48 h-64 object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="max-w-lg text-left text-xl lg:text-2xl mt-10">
                    <p className="text-gray-600">
                        I was born in Delhi, India and currently work remotely.
                        For the past 6+ years, I have been collaborating with
                        funded companies on full stack development and
                        mentoring.
                    </p>
                    <p className="mt-4 text-gray-600">
                        I work with with founders to create compelling stories
                        and digital experiences. My goal is to make their
                        products shine, resonate with users, and attract more
                        investors.
                    </p>
                </div>
            </div>

            {/* Logos */}
            <div className="flex flex-col items-center mt-48  ">
                <p className="text-gray-500 italic  section-side-message-right caveat-new text-2xl mb-4">
                    amazing founders and employees
                </p>
                <h3 className="text-gray-500 text-xl md:text-3xl mb-16 lg:mb-32 ">
                    So far I have worked with{" "}
                    <span style={{ textDecoration: "line-through" }}>
                        various funded startups{" "}
                    </span>{" "}
                    ^
                </h3>

                <Companies />

                <span className="italic"></span>
            </div>
        </section>
    );
};

export default AboutSection;

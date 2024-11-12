import React from "react";
import AboutSection from "./about";
import WorkSection from "./work";
import CaseStudySection from "./CaseStudySection";
import CallToActionCard from "./CallToAction";
import Stack from "./Stack";

const HeroSection = () => {
    return (
        <>
            <section className=" h-vh w-full flex flex-col  justify-center bg-gray-50 p-8  mt:16 mb-16 lg:p-32 hero-section  ">
                {/* Hero Content */}
                <div className="">
                    <p className="text-lg text-gray-600 flex items-start  space-x-2">
                        <span>
                            👋 I'm <b>Jayesh Bidani</b>,
                            <br />
                            Software Engineer, Educator, Traveller from 🇮🇳 and
                        </span>
                    </p>
                    <h3 className="mt-4 text-2xl md:text-3xl  lg:text-5xl font-bold text-gray-900">
                        building products using code <br />
                        and create unique, empathic <br />
                        product experiences
                    </h3>
                </div>

                {/* Tags */}
                <div className="flex space-x-0 sm:space-x-4 mt-8 flex-wrap flex-col sm:flex-row items-start   ">
                    <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-lg md:text-2xl font-semibold  sm:w-fit mb-8 md:mt-0">
                        🌐 Full Stack Development
                    </span>
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-lg md:text-2xl font-semibold sm:w-fit mb-8 md:mt-0">
                        ✨ Hybrid Mobile Apps
                    </span>
                    <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-lg md:text-2xl font-semibold sm:w-fit mb-8 md:mt-0">
                        💡 Creative Designs
                    </span>
                    <span className="bg-orange-200 text-orange-800 px-6 py-1 rounded-lg md:text-2xl font-semibold sm:w-fit mb-8 md:mt-0">
                        🎨 AR/VR
                    </span>

                    <span className="bg-purple-200 text-purple-800 px-6 py-1 rounded-lg md:text-2xl font-semibold sm:w-fit mb-8 md:mt-0">
                        🎨 3D Game Development
                    </span>
                </div>
            </section>
            <AboutSection />

            <WorkSection />
            <CaseStudySection />
            <Stack />
            <CallToActionCard />
        </>
    );
};

export default HeroSection;

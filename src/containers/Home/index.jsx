import React from "react";
import AboutSection from "./about";
import WorkSection from "./work";
import CaseStudySection from "./CaseStudySection";
import CallToActionCard from "./CallToAction";
import Stack from "./Stack";
import Pills from "../../components/Pills";
import Extra from "./Extra";
import Footer from "./Footer";
const HeroSection = () => {
    return (
        <>
            <section
                id="about"
                className=" min-h-vh w-full flex flex-col  justify-center bg-gray-50 p-8  mt:16 mb-16 lg:p-32 hero-section  "
            >
                {/* Hero Content */}
                <div className="">
                    <p className="text-xl md:text-3xl text-gray-600 flex items-start  space-x-2">
                        <span>
                            👋 I'm <b>Jayesh Bidani</b>,
                            <br />a Senior Software Engineer and Web Development
                            Expert.
                        </span>
                    </p>
                    <h3 className="mt-4 text-2xl md:text-4xl  lg:text-4xl font-bold text-gray-900">
                        I focus on building products using{" "}
                        <code> &lt;Code/&gt; </code> and creating unique,
                        empathic product experiences.
                    </h3>
                </div>

                {/* Tags */}
                <Pills />
            </section>
            <AboutSection />

            <WorkSection />
            <CaseStudySection />
            <Stack />
            <CallToActionCard />
            <Extra />
            <Footer />
            <div className="flex width-full flex-col md:flex-row justify-between footer-credits">
                <div>Copyleft@[What-year-is-this]</div>
                <div>Crafted with ❤️ by Jayesh Bidani</div>
            </div>
        </>
    );
};

export default HeroSection;

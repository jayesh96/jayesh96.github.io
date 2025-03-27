import React from "react";
const WorkSection = () => {
    return (
        <section className="h-full flex flex-col items-center mt:32 md:mt-64 py-16 px-8 bg-white w-full work-section">
            {/* Logos */}
            <div className="flex flex-col text-center ">
                <p className="text-gray-500 text-lg lg:text-4xl">
                    Your product can look something like this too
                </p>
                <p className="text-gray-500 italic mb-2 section-side-message-right caveat-new text-2xl">
                    Check out my work!
                </p>
            </div>
        </section>
    );
};

export default WorkSection;

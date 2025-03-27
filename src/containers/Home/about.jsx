import React from "react";
import Companies from "../../components/Companies";

const COMPANIES = [
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qhojo4dzbzgbu362o7kn",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/wqbrxlktqg1sag58yrts",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qaxczo3oha5mz6nnjwfo",
    },
    {
        src: "https://media.glassdoor.com/sql/4400757/kontext-india-squarelogo-1627049424043.png",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/cheeov1jruvldqq7uufs",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/e8kisuoetemicyoeznxz",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/zfvkuf2k98lacoqpqdiw",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/luqdr3bawm8ifyxuuoq0",
    },
    {
        src: "data:image/png;base64,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",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1397752992/74769b9ae07299a83ba081cd99930ab9.png",
    },
    {
        src: "https://kmiteservices.com/images/logo1.png",
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1446411369/gmaliteiulna4pefluib.jpg",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/C510BAQHklCfhCEJaNw/company-logo_200_200/company-logo_200_200/0/1630628887959?e=2147483647&v=beta&t=i9bwbuUSu3fidgCxJtOWpsll4yDue9oBomL2DfN4iSQ",
    },
    {
        src: "data:image/jpeg;base64,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",
    },
];

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

                <Companies data={COMPANIES} />

                <span className="italic"></span>
            </div>
        </section>
    );
};

export default AboutSection;

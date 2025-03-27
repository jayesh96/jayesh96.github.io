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
        src: "https://bookface-images.s3.amazonaws.com/logos/58b19639becbd4d495b7ca39c2b95bb42d24d8ed.png?1588366041",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/C4E0BAQGgV2CDFA_SAA/company-logo_200_200/company-logo_200_200/0/1631303859833?e=1739404800&v=beta&t=oKT8YVp5NgRISqchUIf86jkJSCIMos2mNpprH907YXM",
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

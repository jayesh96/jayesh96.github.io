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
        src: "https://media.licdn.com/dms/image/v2/C510BAQHFm1-64M66tg/company-logo_200_200/company-logo_200_200/0/1630622942788/hypothizerai_logo?e=1739404800&v=beta&t=f--9ky_6QIkStlYrdmM8VnkpXNqZh4ljyPyFQ2uI_Zc",
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

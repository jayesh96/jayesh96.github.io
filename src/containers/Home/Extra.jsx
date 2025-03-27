import React from "react";
import ClapButton from "./Clap";
import Companies from "../../components/Companies";
import HoverImagePopup from "../../components/HoverImagePopup";

const ORGS = [
    {
        src: "https://media.licdn.com/dms/image/v2/D4E0BAQHgGacdFVlpMA/company-logo_100_100/company-logo_100_100/0/1689890082368/init_fiu_logo?e=1748476800&v=beta&t=RNAPhYF65G1Y2YzOyMTHHOAGVd40QRbQ-DHxFwU8dgk",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/D560BAQEit9Hxt3wa5Q/company-logo_100_100/company-logo_100_100/0/1701203787328/treehacks_logo?e=1748476800&v=beta&t=cdRyPVHTbP7fTXq2ufgb_HHlXCIP0K9P0k09kSUb0q8",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/C560BAQExw_VcTXsZ5A/company-logo_100_100/company-logo_100_100/0/1630638699708/garudahacks_logo?e=1748476800&v=beta&t=RcbwC3cR4rVjjyXVf8ModOw_CMnb4dsQFFVLEo69Ndc",
    },
];

const Extra = ({ hobbiesRef }) => {
    return (
        <section
            ref={hobbiesRef}
            id="about"
            className="flex flex-col items-center justify-center min-h-screen bg-white text-center  w-full mt-32"
        >
            <h3 className="text-xl md:text-3xl lg:text-5xl font-bold max-w-96 mb-8">
                Want to know more about me?
            </h3>
            <p className="text-gray-500 italic mb-2  caveat-new text-2xl">
                💡 Scroll down, and don’t forget to hover!
            </p>

            <div className="flex flex-col londrina-outline-regular mt-8 text-3xl">
                <ol>
                    <li className="my-8 hover:text-red-900 hover:font-extrabold	">
                        <HoverImagePopup
                            text="I play Squash"
                            imageUrl="https://iili.io/2ucWlt4.png"
                        />
                    </li>

                    <li className="my-8 hover:text-magenta-900 hover:font-extrabold	">
                        <HoverImagePopup
                            text="I swim on weekends"
                            imageUrl="https://iili.io/2ucWEV2.png"
                        />
                        <p className="text-magenta-500 italic mb-2  caveat-new text-2xl">
                            (Only in summers)
                        </p>
                    </li>

                    <li className="my-8 hover:text-green-900  hover:font-extrabold">
                        I play Chess
                        <p className="text-green-500 italic mb-2  caveat-new text-2xl">
                            (Chess.com Rating 1480)
                        </p>
                    </li>
                    <li className="my-8 hover:text-orange-900  hover:font-extrabold">
                        I teach coding
                        <p className="text-orange-500 italic mb-2  caveat-new text-2xl">
                            ( Join 150+ students on my discord group-{" "}
                            <a
                                style={{ borderBottom: "3px inset orange " }}
                                href="https://discord.gg/HZEUxxKq"
                            >
                                HelpMeBuddy
                            </a>{" "}
                            NOW!!! )
                        </p>
                    </li>
                    <li className="my-8 hover:text-blue-900 hover:font-extrabold">
                        <HoverImagePopup
                            text="I travel (solo)"
                            imageUrl="https://iili.io/2ucWGPS.png"
                        />
                        <p className="text-blue-500 italic mb-2  caveat-new text-2xl">
                            ( 16 countries and counting!)
                        </p>
                    </li>

                    <li className="my-8 hover:text-brown-900 hover:font-extrabold">
                        <HoverImagePopup
                            text=" I lift weights"
                            imageUrl="https://iili.io/2ucWcNf.jpg"
                        />
                        <p className="text-brown-500 italic mb-2  caveat-new text-2xl">
                            ( I like heavy lifting)
                        </p>
                    </li>

                    <li className="my-8 hover:text-purple-900 hover:font-extrabold">
                        <HoverImagePopup
                            text=" Hackathon Enthusiast "
                            imageUrl="https://iili.io/2uc6Qvj.jpg"
                        />
                        <p className="text-purple-500 italic mb-2  caveat-new text-2xl">
                            ( I compete, mentor, and sometimes I win big! )
                        </p>
                    </li>
                </ol>
            </div>

            <Companies data={ORGS} text={"& Ready for more!"} />
        </section>
    );
};

export default Extra;

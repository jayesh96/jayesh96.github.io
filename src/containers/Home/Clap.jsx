import React, { useState } from "react";

const ClapButton = () => {
    const [claps, setClaps] = useState(0);
    const [clapEffects, setClapEffects] = useState([]);

    const handleClap = () => {
        setClaps(claps + 1);

        // Add a new clap effect
        const newEffect = { id: Date.now() };
        setClapEffects([...clapEffects, newEffect]);

        // Remove the effect after animation (500ms)
        setTimeout(() => {
            setClapEffects((currentEffects) =>
                currentEffects.filter((effect) => effect.id !== newEffect.id)
            );
        }, 500);
    };

    return (
        <div className="relative section-side-message-right flex flex-col items-center space-y-2 mt-24">
            <button
                onClick={handleClap}
                className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-full transition-transform duration-300 hover:bg-gray-700 active:bg-gray-900 transform scale-100"
            >
                👏 Clap
            </button>

            {/* Render floating clap effects */}
            <div className="absolute top-0 flex flex-col items-center">
                {clapEffects.map((effect) => (
                    <span
                        key={effect.id}
                        className="text-white animate-pop text-lg"
                        style={{
                            position: "absolute",
                            animation: "float 0.5s ease-out forwards",
                        }}
                    >
                        👏
                    </span>
                ))}
            </div>

            {/* Define the float animation using Tailwind CSS */}
            <style jsx>{`
                @keyframes float {
                    0% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(-40px) scale(1.3);
                    }
                }
                .animate-pop {
                    animation: float 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ClapButton;

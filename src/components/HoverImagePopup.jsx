import React, { useState } from "react";

const HoverImagePopup = ({ text, imageUrl }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (event) => {
        const rect = event.target.getBoundingClientRect();
        setPosition({ x: rect.right + 10, y: rect.top });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className=" cursor-pointer">{text}</span>
            {isHovered && (
                <div
                    className="absolute bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10"
                    style={{
                        top: 0,
                        left: 0,
                        width: "200px",
                    }}
                >
                    <img
                        src={imageUrl}
                        alt="Popup"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            )}
        </div>
    );
};

export default HoverImagePopup;

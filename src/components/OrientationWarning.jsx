import React, { useState, useEffect } from "react";

const OrientationWarning = () => {
    const [showWarning, setShowWarning] = useState(false);

    const handleOrientationChange = () => {
        const isLandscape = window.innerWidth > window.innerHeight;
        const isMobile = window.innerWidth <= 768; // Adjust this width for mobile screen size

        setShowWarning(isLandscape && isMobile);
    };

    useEffect(() => {
        // Initial check
        handleOrientationChange();

        // Add event listeners to detect orientation change
        window.addEventListener("resize", handleOrientationChange);

        // Clean up the event listener
        return () => {
            window.removeEventListener("resize", handleOrientationChange);
        };
    }, []);

    return (
        <div>
            {showWarning && (
                <div className="orientation-warning">
                    <div className="rotate-icon"></div>
                    <p>
                        Please rotate your device to portrait mode for the best
                        experience.
                    </p>
                </div>
            )}
        </div>
    );
};

export default OrientationWarning;

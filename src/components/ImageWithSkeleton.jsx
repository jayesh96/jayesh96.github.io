import React, { useState } from "react";

const ImageWithSkeleton = ({ src, alt, imgStyle }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div className="image-container">
            {!isLoaded && <div className="skeleton-loader" />}
            <img
                style={imgStyle}
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                className={`image ${isLoaded ? "visible" : "hidden"}`}
            />
        </div>
    );
};

export default ImageWithSkeleton;

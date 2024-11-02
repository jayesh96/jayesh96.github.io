import VerticalInfiniteCarousel from "./Carousel";
import Titles from "./Titles";

const LandingPage = () => {
    return (
        <>
            <VerticalInfiniteCarousel />
            <Titles />
            <div class="field">
                <div class="mouse"></div>
            </div>
        </>
    );
};

export default LandingPage;

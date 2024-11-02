import VerticalInfiniteCarousel from "./Carousel";
import Titles from "./Titles";
import Info from "./Info";

const LandingPage = () => {
    return (
        <>
            <VerticalInfiniteCarousel />
            <Titles />
            <Info />
            {/* <div class="field">
                <div class="mouse"></div>
            </div> */}
        </>
    );
};

export default LandingPage;

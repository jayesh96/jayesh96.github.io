import React, { Suspense, lazy, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Preloader from "./components/PreLoader.jsx";
import NotFound from "./components/NotFound.jsx";

const Home = lazy(() => import("./containers/Home/index.jsx"));

const AppRoutes = () => {
    const storyRef = useRef(null);
    const projectsRef = useRef(null);
    const hobbiesRef = useRef(null);

    // Scroll function
    const scrollToSection = (elementRef) => {
        elementRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Suspense fallback={<Preloader />}>
            <Navbar
                storyRef={storyRef}
                projectsRef={projectsRef}
                hobbiesRef={hobbiesRef}
                scrollToSection={scrollToSection}
            />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            storyRef={storyRef}
                            projectsRef={projectsRef}
                            hobbiesRef={hobbiesRef}
                        />
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;

import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Preloader from "./components/PreLoader.jsx";
import OrientationWarning from "./components/OrientationWarning";

const Home = lazy(() => import("./containers/Home/index.jsx"));

const NotFound = () => (
    <div>
        <h2>404 - Page Not Found</h2>
        <Link to="/">Go to Home</Link>
    </div>
);

const AppRoutes = () => (
    <Suspense fallback={<Preloader />}>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
);

export default AppRoutes;

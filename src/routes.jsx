import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

const LandingPage = lazy(() => import("./containers/LandingPage/index.jsx"));

const NotFound = () => (
    <div>
        <h2>404 - Page Not Found</h2>
        <Link to="/">Go to Home</Link>
    </div>
);

const AppRoutes = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<div>Hello </div>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
);

export default AppRoutes;

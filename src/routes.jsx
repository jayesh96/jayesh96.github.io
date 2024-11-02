import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const LandingPage = lazy(() => import("./containers/LandingPage/index.jsx"));

const AppRoutes = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<div>Hello </div>} />
        </Routes>
    </Suspense>
);

export default AppRoutes;

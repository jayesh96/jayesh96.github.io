import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LandingPage from "./containers/LandingPage/index.jsx";
import "./index.css";

const App = () => {
    return (
        <>
            <Navbar />
            <LandingPage />
        </>
    );
};

export default App;

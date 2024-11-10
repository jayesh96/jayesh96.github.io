import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

import Navbar from "./Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;

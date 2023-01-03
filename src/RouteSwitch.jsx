import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="./src/profile" element={<Profile />} />
        </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch
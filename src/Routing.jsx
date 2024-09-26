import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Perfil from "./Perfil";
import Detalle from "./Detalle";

export default function Routing() {
    const nav_links = [
        { url: "/", component: App },
        { url: "perfil", component: Perfil },
        { url: "detalle", component: Detalle },
    ];
    return (
        <Routes>
            {nav_links.map((link, index) => (
                <Route key={index} path={link.url} element={<link.component />} />
            ))}
        </Routes>
    );
}
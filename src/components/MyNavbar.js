import React from "react";
import logo from "../img/logo192.png"

export const MyNavbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-left">
                < img src={logo} />
                <h3> ReactFacts </h3>
            </div>
            <div className="navbar-right">
                <h3> React Course - Proyect 1 </h3>
            </div>
        </nav>
    )
}
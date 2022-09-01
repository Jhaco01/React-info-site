import React from "react";
import logo from "../img/logo192.png"
import { ToggleDarkMode } from "./ToggleDarkMode/ToggleDarkMode";
import "../style/MyNavbar.css";


export const MyNavbar = ({toggleDark}) => {

    return(
        <nav className="navbar">
            <div className="navbar-left">
                < img src={logo} />
                <h3> ReactFacts </h3>
            </div>
            < ToggleDarkMode 
                toggleDark={toggleDark}
            />
        </nav>
    )
}
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./HeaderLink.module.css"

const HeaderLink = ({ name, link }) => {
    return (
        <Link to={link}>
            <div class="link">
                {name}
            </div>
        </Link>
    )
}


export default HeaderLink
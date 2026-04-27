import React from "react"
import styles from './Header.module.css';
import HeaderLink from "../HeaderLink/HeaderLink"
import { BrowserRouter } from "react-router-dom";

const Header = props => (
    <div class="header">
        <HeaderLink name="Pokedex" link="/"></HeaderLink>
        <HeaderLink name="About" link="/About"></HeaderLink>
    </div>
)

export default Header
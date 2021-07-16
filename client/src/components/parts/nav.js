import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './nav.css';

import Menu from './menu';


const Nav = () => {
    const [menu, setMenu] = useState(false);
    const [menuClass, setMenuClass] = useState("");

    const animateMenu = () => {
        setMenu(true);
        setMenuClass("menu");
    }

    return (
        <header>
            <nav>
                <div className="logo_div">
                    <Link to="/"><h1>TraMag</h1></Link>
                </div>
                <div className="nav_options">
                    <button className="sub_btn">Subscribe</button>
                    <button className="menu_btn" onClick={animateMenu}>Menu<FontAwesomeIcon icon={faChevronDown} /></button>
                </div>
            </nav>
            {menu ? (<Menu menuClass={menuClass} setMenuClass={setMenuClass} />) : ("")}
        </header>
    )
}

export default Nav;

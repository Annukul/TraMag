import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './nav.css';

const Menu = ({ setMenuClass, menuClass }) => {

    return (
        <div className={`${menuClass}`}>
            <div className="menu_top">
                <button className="menu_close_btn" onClick={() => { setMenuClass("menuClose") }}>X</button>
            </div>
            <div className="menu_bottom">
                <div className="menu_bottom_left">
                    <h3>Topics</h3>
                    <ul className="menu_ul">
                        <li className="menu_li"><a className="menu_links">Animals</a></li>
                        <li className="menu_li"><a className="menu_links">Space</a></li>
                        <li className="menu_li"><a className="menu_links">Nature</a></li>
                        <li className="menu_li"><a className="menu_links">Planets</a></li>
                        <li className="menu_li"><a className="menu_links">Earth</a></li>
                        <li className="menu_li"><a className="menu_links">Climate Change</a></li>
                        <li className="menu_li"><a className="menu_links">Outdoors</a></li>
                        <li className="menu_li"><a className="menu_links">Travel</a></li>
                    </ul>
                </div>
                <div className="menu_bottom_right">
                    <ul className="menu_ul">
                        <li className="menu_li"><a className="menu_links">About</a></li>
                        <li className="menu_li"><a className="menu_links">Join us</a></li>
                        <li className="menu_li"><a className="menu_links">Privacy policy</a></li>
                        <li className="menu_li"><a className="menu_links">Content</a></li>
                        <li className="menu_li"><a className="menu_links">Copyright claims</a></li>
                        <li className="menu_li"><a className="menu_links">Site map</a></li>
                        <li className="menu_li"><Link to="/create" className="menu_links">Create ❀</Link></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Menu;

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/NavBar.css';
import Logo from '../img/logo.png'

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown  = () => {
        setShowDropdown(!showDropdown);
    };

    return(
        <div id="NavWrapper">
                <img id="logo" alt="logo" src={Logo}/>
                <div id="nav">
                <ul id ="basicUL">
                    <li><Link className="no_line" to="/">Home</Link></li>
                    <li><Link className="no_line" to="/about">About</Link></li>
                    <li>
                        <div onClick = {toggleDropdown} id='triggerDrop'>
                            Projects 🔽
                                {showDropdown && (
                                    <ul id="dropMenu">
                                        <li className="dropLI"><Link className ="dropItem" to="/uxuiprojects">UX/UI</Link></li>
                                        <li className="dropLI"><Link className ="dropItem" to="/webdevprojects">Web Development</Link></li>
                                        <li className="dropLI"><Link className ="dropItem" to="/productprojects">Product Design</Link></li>
                                        <li className='dropLI'><Link className='dropItem' to='/st'>ShineTime</Link></li>
                                    </ul>
                                )}
                        </div>
                    </li>
                    <li><Link className="no_line" to="/contact">Contact</Link></li>
                </ul>
                </div>
        </div>
    );
};

export default NavBar;
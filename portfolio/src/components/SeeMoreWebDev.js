import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/SeeMoreButtons.css';

const SeeMoreWebDev = () => {
    return(
            <Link className="seeMoreButton" to="/webdevprojects" >See More</Link>
    );
};

export default SeeMoreWebDev;
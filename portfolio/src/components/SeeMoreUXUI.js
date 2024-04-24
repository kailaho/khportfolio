import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/SeeMoreButtons.css';

const SeeMoreUXUI = () => {
    return(
            <Link className="seeMoreButton" to="/uxuiprojects" >See More</Link>
    );
};

export default SeeMoreUXUI;
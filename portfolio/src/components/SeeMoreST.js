import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/SeeMoreButtons.css';

const SeeMoreST = () => {
    return(
            <Link className="seeMoreButton" to="/st" >See More</Link>
    );
};

export default SeeMoreST;
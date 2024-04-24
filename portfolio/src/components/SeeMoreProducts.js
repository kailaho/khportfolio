import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/SeeMoreButtons.css';

const SeeMoreProducts = () => {
    return(
            <Link className="seeMoreButton" to="/productprojects" >See More</Link>
    );
};

export default SeeMoreProducts;
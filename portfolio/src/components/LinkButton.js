import React from 'react';
import {Link} from 'react-router-dom';

const LinkButton = ({text, link}) => {

    return(
        <>
            <Link style={{color: 'white', backgroundColor: 'black', padding: '1em', textDecoration: 'none', borderRadius:'3em', boxShadow: '0 4px 8px rgba(128, 128, 128, 0.5) '}} to={link} target="_blank">{text}</Link>
        </>
    );
};

export default LinkButton; 
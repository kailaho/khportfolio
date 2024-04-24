import React from 'react';
import LinkButton from './LinkButton';
import { Link } from 'react-router-dom';

const Contact = () => {
    return(
        <div>
            <h1>Contact</h1>
            <p style={{padding: "1.5em", paddingTop: '0em', paddingBottom: '0em'}}>I would love to connect!</p>
            <h2 style={{padding: '1.5em', fontStyle: 'none', fontWeight: 'normal', fontSize: '1.1em' }}>Email: kaila.ho@colorado.edu</h2>
            <a style={{color: 'white', backgroundColor: 'black', margin: '1.5em', padding: '.8em', textDecoration: 'none', borderRadius:'3em', boxShadow: '0 4px 8px rgba(128, 128, 128, 0.5) '}} target='_blank' href="https://www.linkedin.com/in/kaila-ho-70303821a">Connect on LinkedIn</a> 

        </div>
    );
};

export default Contact;
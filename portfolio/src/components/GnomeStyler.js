import React from 'react';
import DetailProject from './DetailProject';
import gnome from '../img/gnome.png';
import gnomeFinal from '../img/gnomeStyler.png';
import gnomeFinal2 from '../img/gnomeStyler2.png';

const GnomeStyler= () => {  
    return (
        <>
        <DetailProject
            projectTitle={"Gnome Styler"}
            projectDesc={"Javascript application exploring iteration through pixels to alter the appearance of the image"}
            projectLink={"https://kailaho.github.io/classPortal/assignment-4/index.html"}
            skills={["API Calls", "Javascript", "HTML/CSS"]}
            goals={["Explore creative ways to implement API calls", "Create an interesting way for users to interact with an API","Learn more about automated photo altering"]}
            designProcess={"Since the main focus of this project was working with API calls, I centered my design around the capabilities of the API that I was using. The coolor.io API provides a randomly generated color, but limits users to a certain number of calls per hour. I wanted to create a fun interactive module where the user could color an image randomly, and settled for a gnome which I designed with simple shapes in Photoshop. I wanted a simple UI with clear instructions and constrast."}
            img1={gnome}
            ux={"The user testing for this project consisted of "}
            finalImages={[gnomeFinal2, gnomeFinal]}
            development={""}
            learningOutcomes={""}
        >
        </DetailProject>
        </>
    );
};

export default GnomeStyler;
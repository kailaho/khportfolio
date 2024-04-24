import React from 'react';
import PDFViewer from './PDFViewer';
import headshot from '../img/headshot.jpg';
import '../styles/About.css';
import designProcess from '../img/designProcess2.png';
const About = () => {
    return(
        // <div style={{textAlign:"center", margin: "2em", overflow:"scroll"}}>
        //     <PDFViewer/>
        // </div>
        <>
        <div id="aboutWrapper">
        <img alt="headshot image" id="headshot" src={headshot}></img>
        <div id = "aboutText">
        <h4 id="aboutMe">Hi, my name is Kaila. I am a UX/UI designer, Front End Web Developer, and Product deisgner from Denver, Colorado.
        I am passionate about empathetic design and creating products that both celebrate and help users in whatever issue they 
        may be trying to solve. I am skilled in creating designs and products that are both visually appealing and functional, keeping
        the users in mind along every step of the way. Above all I am someone who loves learning and is a confident problem solver,
        I love a good challenge and thrive in environments that require fast paced thinking, learning, and collaboration.  </h4>

        <img alt="design process poster" id="designProcess" src={designProcess}></img>
        </div>
        </div>
        </>
    );
};

export default About;
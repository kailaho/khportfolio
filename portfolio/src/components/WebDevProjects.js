import React, {useEffect} from 'react';
import BannerAnimation from './BannerAnimation';
import ProjectCard from './ProjectCard';
import Filler from '../img/blueCanvas.png'
import plantWeb from '../img/plantWeb.png'
import gnomeStyler from '../img/gnomeStyler.png';
import portfolioHero from "../img/portfolioHero.png";

const WebDevProjects = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    return(
        <>
        <BannerAnimation text={"Web Development Projects"}/>
        <ProjectCard
            title={"Colorado Native Plant Website"}
            img={plantWeb}
            pitch={"Created using HTML, CSS, and Three.js, this website provides information about Colorado's native plant spieces in a visually appealing and interactive manner."}
            description={"Combining a passion for the Colorado outdoors and alpine environments and my desire to learn new JS libraries, I explored ways in which I could use new techniques in order to incorporate visually enticing and interactive features into my informational website. This project was a great learning opportunity in both understanding how to develop a website whose design furthers its purpose as well as advancing my skills technically. Using the Three.js library, I was able to incorporate 3D models of each of the plants I cataloged, which was a great learning experience and also provided a nuanced visual element."}
            skill1={"HTML/CSS"}
            skill2={"Three.js"}
            skill3={"UX/UI Design"}
            text={"▶"}
            link={"/nativePlants"}
        />

        <ProjectCard
            title={"React Portfolio"}
            img={portfolioHero}
            pitch={"Demonstrating proficiency in React trough hand-coding this portfolio website"}
            description={"To showcase my projects and skills acquired throughout my education, I designed and built this website in React in order to create a portfolio that I felt best highlights my skills and displays them in an appealing and succinct manner. "}
            skill1={"React"}
            skill2={"Website Design"}
            skill3={"HTML5/CSS"}
            text={"▶"}
            link={"/portfolio"}
        />

        <ProjectCard
            title={"Gnome Styler"}
            img={gnomeStyler}
            pitch={"Through the help of the coolor.io API, this project provided an opportunity to practice API calls and implement them in a fun and engaging way."}
            description={"To practice API calls, I used the coolor.io API to generate a random color palette that is then applied to the gnome graphic to the right. In order to replace the colors, I iterated through each pixel of the image, cheked if it match the old color, and then replaced it with the new color generated from the color palette. The API outputs five colors, which change the gnome's hat, shirt, mittens, pompom, and shoes individually. This was a very challening assignment for me, but I learned a lot about APIs, using canvas in HTML, for loops, and got lots of practice debugging using console.log and developer tools."}
            skill1={"API Calls"}
            skill2={"Developer Tools"}
            skill3={"HTML/CSS"}
            text={"▶"}
            link={"/gnomeStyler"}
        />

        
        </>
    );
};

export default WebDevProjects;
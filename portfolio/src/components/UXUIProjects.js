import React, {useEffect} from 'react';
import BannerAnimation from './BannerAnimation';
import ProjectCard from './ProjectCard.js';
import Filler from "../img/blueCanvas.png";
import buffBuffs from "../img/buffBuffsHero.png";
import portfoliPro  from "../img/portfolioproHero.png";


const UXUIProjects = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
      
    return(
        <>
        <BannerAnimation text={"UX/UI Projects"}/>
        <ProjectCard
            title={"Buff Buffs"}
            img={buffBuffs}
            pitch={"Collborated as part of a design team to reimagine our university's rec center app to all students"}
            description={"This collaborative and user-focusef project focused on developing a practical solution for CU Boulder's recreational center users. I spearheaded the creation of all prototypes and mockups, working closely with teammates Erin Guenther and Iliana Aldana. Our solution, born from rigorous ideation and user testing, offers a seamless experience for both new and existing users, empowering them with real-time facility insights and improved navigation."}
            skill1={"User Testing"}
            skill2={"UX/UI Design"}
            skill3={"Figma"}
            text={"▶"}
            link={"/buffBuffs"}
        />

        <ProjectCard
            title={"PortfoliPro"}
            img={portfoliPro}
            pitch={"An innovative app design geared towards creative professionals seeking an easier way to network"}
            description={"This app design provides a solution for creative professionals, artists, and designers to be able to network and share their work in a fashion similar to LinkedIn or Instagram. I noticed that within the design industry, many professionals often have a difficult time sharing their work and portfolios with others because of a lack of a good platform to do so. The purpose of this design is for them to be able to share work from their portfolios in a social media fashion to gain a broader network within the industry."}
            skill1={"Figma"}
            skill2={"UX/UI Design"}
            skill3={"High Fidelity Mockups"}
            text={"▶"}
            link={"/portfoliPro"}
        />

        </>
    );
};

export default UXUIProjects;
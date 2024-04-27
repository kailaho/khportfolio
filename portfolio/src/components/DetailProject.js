// NativePlants.js

import React, {useState, useEffect} from 'react';
import '../styles/DetailProject.css'; // Import your CSS file for styling
import LinkButton from './LinkButton';
import { Link } from 'react-router-dom';
import TitleAnimation from './TitleAnimation';


const DetailProject = ({projectTitle, projectDesc, projectLink, skills, goals, designProcess, img1, ux, development, finalImages, learningOutcomes, backToLink, backToWhere}) => {

        // const [currentImageIndex, setCurrentImageIndex] = useState(0);

        // const changeImage = (direction) => {
        //   const newIndex = (currentImageIndex + direction + finalImages.length) % finalImages.length;
        //   setCurrentImageIndex(newIndex);
        // };

        useEffect(()=>{
          window.scrollTo(0, 0);
        },[])

  return (
    <div className="native-plants-container">
    <div id="goalsSkills">
        <div id="goalsSkills-col1">
            <TitleAnimation text={projectTitle}/>
            <p className="description">{projectDesc}</p>

            

            <div className="skills-section">
                <div className="skill-item">{skills[0]}</div>
                <div className="skill-item">{skills[1]}</div>
                <div className="skill-item">{skills[2]}</div>
                {/* Add more skills as needed */}
            </div>

            <div> <a className ="link" target="_blank" href={projectLink}>Project Link</a></div>
            
        </div>
        

      {<div className="goals-section">
        <h2 id= "projectGoals">Project Goals</h2>
        <ul id="goalList">
          <li className="goal">{goals[0]}</li>
          <li className="goal">{goals[1]}</li>
          <li className="goal">{goals[2]}</li>
          {/* Add more goals as needed */}
        </ul>
      </div> }

      

    </div>
      

      <div className="design-process-section">
        <h2 className="sectionHeading">Design Process</h2>
        <p>{designProcess}</p>
      </div>

      <div className="ux-testing-section">
        <img className ='iteration'src={img1} alt="UX Testing" />
        <div id="uxText">
        <h2  className="sectionHeading">UX Testing and Iteration</h2>
        <p>{ux}</p>
        </div>      
      </div>

      <div className="development-section">
        <h2  className="sectionHeading">Development</h2>
        <p>{development}</p>
      </div>

      <div className="final-images-section">
        {/* <button className ="slideShowButton" onClick={() => changeImage(-1)}>⏴</button>
        <img className="final-product" src={finalImages[currentImageIndex]} alt="Final Product" />
        <button className ="slideShowButton" onClick={() => changeImage(1)}>⏵</button> */}
        <div id="finalImageFlex">
        <img className="finalImage" src={finalImages[0]} alt="final image 1"/>
        <img  className="finalImage" src={finalImages[1]} alt="final image 2"/>
        </div>
        
        <div id="finalImageFlex">
        <img className="finalImage" src={finalImages[2]} alt="final image 1"/>
        {/* <img  className="finalImage" src={finalImages[1]} alt="final image 2"/> */}
        </div>
      </div>
    

      <div className="learning-outcomes-section">
        <h2  className="sectionHeading">Demonstrated Learning</h2>
        <p>{learningOutcomes}</p>
      </div>

      <div id="centerButton">
      <LinkButton id ="backButton"text={backToWhere} link={backToLink}></LinkButton>
      </div>
    </div>
  );
};

export default DetailProject;

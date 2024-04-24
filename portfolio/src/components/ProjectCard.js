import React from 'react';
import '../styles/ProjectCard.css';
import LinkButton from './LinkButton';

const ProjectCard = ({title, img, pitch, description, skill1, skill2, skill3, text, link}) => {
    return(
    <>
    <div id='ProjectCardWrapper'>
    <div id='ProjectCard'>
    <div id="row1">
            <h1>{title}</h1>
        </div>

        <div id= "row2">
            
            <img id="heroImg" src={img} alt="filler"/>
            
            
            <div id="textSkills">
            
            <div id="text">
                <h4>{pitch}</h4>
                <div id="learnedSkills">
                    <h5>{skill1}</h5>
                    <h5>{skill2}</h5>
                    <h5>{skill3}</h5>
                </div>
                <div id= "descLink">
                <p>{description}</p>
                <div id="detailsBar">
                </div>
                </div>
            </div>

            </div>

            

    
        </div>

     

    </div>

    <div id="linkButtonProj">
        <LinkButton 
            text={text}
            link={link}
            />
    </div>
        
    </div>
        
    
       
    </>
    );
};

export default ProjectCard;
import React from 'react';
import DetailProject from './DetailProject';
import steg1 from '../img/steg1.png';
import steg2 from '../img/steg2.png';
import steg3 from '../img/steg3.png';
import stegHero from '../img/formImg.png';

const Steg = () => {
    return(
        <>
        <DetailProject
        projectTitle={"2D to 3D Stegosaurus"}
        projectDesc={"3D modeled and laser cut children's toy that can be easily manufactured and assembled."}
        projectLink={""}
        skills={["Sketchup", "Product Development", "Laser Cutting and Manufacturing"]}
        goals={["Practice developing Sketchup skills in creating 3D mockups and proper file formatting", "Create aesthetic and precise design through the use of modeling software", "Employ creativity and manufacturing skills to arrive at final product, practicing product development skills throughout"]}
        designProcess={"This project was aimed at employing both creative and technical skills. I wanted to create something fun and visually appealing, which  "}
        img1={steg1}
        ux={"The user testing for this product was based largely on the relationship between our professor and client, who felt the most comfortable communicating in this fashion. Unfortunately, the scope of this project was limited to designing based on her initial desires and then her sending more details about the dimensions of the desk. Due to this limited relationship, the scope of our user testing was not able to reach actual students, even though this would have been very valuable."}
        development={"The development of this project was focused largely on safety and creating a kid-friendly and functional design that met our client's request. This meant that we had several iterations of prototypes and ideation for the mechanism that created the pressure, how the design worked with the shape of the desk, and safety features. We decided to use acryclic to mitigate the chance of splinters and other material hazards, as well as enclosing the ball bearings and bungee cords that created the tension in a safe box so that fingers could not become crushed."}
        finalImages={[stegHero, steg2, steg3]}
        learningOutcomes={"This project was early on in my career as a designer, and was critical in sparking my passion for assistive technology as well as understanding how to work on an engingeering team. My role was largely doing the design ideation and documentation, as well as prototyping the compression-generating mechanisms."}
        backToLink={"/productprojects"}
        backToWhere={"back to Product Design projects"}
        ></DetailProject>
        </>
    );
};

export default Steg;
import React from 'react';
import DetailProject from './DetailProject';
import roller1 from '../img/roller1.png';
import roller2 from '../img/roller2.png';
import roller3 from '../img/roller3.png';
import roller4 from '../img/roller4.png';
import roller5 from '../img/roller5.png';
import roller6 from '../img/roller6.png';

const HandCompression = () => {
    return(
        <>
        <DetailProject
        projectTitle={"Hand Compression Roller"}
        projectDesc={"Hand compression device designed for classroom use to help children with autism focus by creating a calming sensation."}
        projectLink={"https://docs.google.com/presentation/d/17_xMo3FVSgci1-jZZGWuLIQiWRnkPABbnFvYwkrDCAk/edit?usp=sharing"}
        skills={["Assistive Tech", "Product Development", "Rapid Prototyping"]}
        goals={["Work with a client to meet her needs and the needs of her students", "Practice rapid prototyping as part of the design process", "Work on a team to develop team design and marketing skills"]}
        designProcess={"The design process for this project was largely on the needs of a client that is a teach of students with autism. She was connected to us through our professor, Melinda Picket-May, who expressed her desires for a deep pressure therapy device for classroom use. She wanted the device to be small enough to fit in a desk so that her students could use it during the day to help them stay focused during lessons. Based on these desires, we ideated as a group to come up with different methods for how we could implement a large but safe amount of pressure within the desk to create the desired compression effect. "}
        img1={roller1}
        ux={"The user testing for this product was based largely on the relationship between our professor and client, who felt the most comfortable communicating in this fashion. Unfortunately, the scope of this project was limited to designing based on her initial desires and then her sending more details about the dimensions of the desk. Due to this limited relationship, the scope of our user testing was not able to reach actual students, even though this would have been very valuable."}
        development={"The development of this project was focused largely on safety and creating a kid-friendly and functional design that met our client's request. This meant that we had several iterations of prototypes and ideation for the mechanism that created the pressure, how the design worked with the shape of the desk, and safety features. We decided to use acryclic to mitigate the chance of splinters and other material hazards, as well as enclosing the ball bearings and bungee cords that created the tension in a safe box so that fingers could not become crushed."}
        finalImages={[roller2, roller5, roller6]}
        learningOutcomes={"This project was early on in my career as a designer, and was critical in sparking my passion for assistive technology as well as understanding how to work on an engingeering team. My role was largely doing the design ideation and documentation, as well as prototyping the compression-generating mechanisms."}
        backToLink={"/productprojects"}
        backToWhere={"back to Product Design projects"}
        ></DetailProject>
        
        </>
    );
};

export default HandCompression;
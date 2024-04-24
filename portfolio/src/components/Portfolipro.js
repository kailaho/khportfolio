import React from 'react';
import portfoliproHero from '../img/portfolioproHero.png';
import portfolipro1 from '../img/portfolipro1.png';
import portfolipro2 from '../img/portfolipro2.png';
import portfolipro3 from '../img/portfolipro3.png';
import DetailProject from './DetailProject';

const PortfoliPro = () => {
    return(
    <>
    <DetailProject
        projectTitle={"PortfoliPro App Design"}
        projectDesc={"An innovative app design that allows creative professionals to network and showcase their work in a more targeted and effective manner."}
        projectLink={"https://www.figma.com/proto/mSez9yGAClnYLKuUwHTLfI/High-Fidelity-Prototype---V2?type=design&node-id=311-381&t=9jPudbn8rFpoz8Bv-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=311%3A381&mode=design"}
        skills={["Figma", "UX/UI Design", "High Fidelity Mockup"] }
        goals={["Develop more advanced skills in Figma", "Ideate and iterate on an initial idea to produce a high fidelity mockup", "Practice key principles of UX/UI design to produce the most effective product"]}
        designProcess={"The brainstorming and ideation phase of for this project consisted of intensive interviews and consultations with a professional in the design field who shared her own observation of the need for such a platform within the design industry. From there, I began ideating and creating paper prototypes, which laid the foundation for me to create multiple prototypes in Figma and iterate until I was happy with the final mock up."}
        img1={portfolipro2}
        ux={"User testing is still on going for this project, as I am in the process of reaching out to more creative professionals both at my university and in the industry. I plan to share my prototype and see what feedback prospective users may have, as it is invaluable to the process of developing the most effective product. "}
        development={"Developing the multiple iterations and prototypes for this concept required a great attention to detail in order to produce the most polished mock up possible. In doing so I honed my skills in Figma and wireframing, and followed key UX/UI protocols. "}
        finalImages={[portfoliproHero, portfolipro1, portfolipro3]}
        learningOutcomes={"This project was a key catalyst in advancing my skills in Figma and UX/UI design, as it opened my process to many different techniques and practices that I had not been able to practice before. I look forward to continuing my user testing and advancing this concept."}
        backToLink={"/uxuiprojects"}
        backToWhere={"back to UX/UI projects"}
    ></DetailProject>
    </>
    );
};

export default PortfoliPro; 
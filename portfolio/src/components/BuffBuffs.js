import React from 'react';
import DetailProject from './DetailProject';
import BuffBuffsHero from '../img/buffBuffsHero.png';
import BuffBuffs1 from '../img/buffBuffs1.png';
import BuffBuffs2 from '../img/buffBuffs2.png';

const BuffBuffs = () => {
    return (
        <>
        <DetailProject
            projectTitle={"BuffBuffs - CU Boulder Rec Center App Redesign"}
            projectDesc={"A redesign and reimagination of the CU Boulder rec center apps to help students better navigate and use the rec center"}
            projectLink={"https://www.figma.com/proto/4K26xQw9PMb2tV2rbAivBt/Buff-Buffs-Project-Milestone-4?type=design&node-id=2-2&t=bKZjqP3zXo6Px5PN-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2&mode=design"}
            skills={["User Testing", "UX/UI Design", "Figma"] }
            goals={["Collaborate well and contribute effectively to a design team", "Design empathetically with an emphasis on implementing user feedback throughout the prototyping process", "Present and market a new app and demonstrate why it is a better fit for users"]}
            designProcess={"Spanning several months, the development of this project focused heavily on user feedback on several prototypes. That meant there was heavy emphasis on producing many prototypes rapidly, as well as focusing on empathetic design. Since we had access to a large sample of our target audience at our university, we were able to gain a wide variety of feedback which we then discussed and decided whether or not to implement it into the next iteration of our product."}
            img1={BuffBuffs2}
            ux={"In order to gain user feedback, we interviewed and sent out several surveys to our users. Initally, it was clear that many users of the rec center, espescially new ones, felt anxious when the rec center was more crowded and when they didn't know how to navtigate the space. We identified these as our two main goals in this design, and iterated from there. We did two rounds of user testing where we had users test our prototype and complete certain tasks in order to gain their valuable feedback, which allowed us to create a more tailored design."}
            development={"The development process of this proejct required many iterations of rapid prototypes and we had to be open to feedback we were receiving from users. This meant being proficient in Figma, as well as learning new skills to accomodate for specific changes."}
            finalImages={[BuffBuffsHero, BuffBuffs2, BuffBuffs1]}
            learningOutcomes={"Throughout the course of this project, I honed my skills in Figma to create strong prototypes that allowed for the best user testing and final outcome. It was a good experience to work as part of a design team and sharpen my skills in collaboration and communication when it comes to UX/UI Design."}
            backToLink={"/uxuiprojects"}
            backToWhere={"back to UX/UI projects"}
        ></DetailProject>
        </>
      );
};

export default BuffBuffs;


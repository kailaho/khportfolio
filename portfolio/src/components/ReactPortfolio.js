import React from 'react';

import DetailProject from './DetailProject';
import reactPortfolio from '../img/portfolioHero.png';
import portfolio1 from '../img/portfolio1.png';
import portfolio2 from '../img/portfolio2.png';
import portfolio3 from '../img/portfolio3.png';

const ReactPortfolio = () => {
    return(
    <>
    <DetailProject
        projectTitle={"React Portfolio"}
        projectDesc={"Creative and technically challenging way to showcase projects and coursework throughout my education and design career"}
        projectLink={""}
        skills={["Figma", "UX/UI Design", "Animate.js"] }
        goals={["Develop and advance React.js Sklls", "Showcase project work", "Demonstrate learning and design process throughout"]}
        designProcess={"Over several months, the design process for this project revolved around gathering and incorporating user feedback on various prototypes. With a strong emphasis on producing multiple iterations swiftly and prioritizing empathetic design, I engaged extensively with my university's diverse demographic to collect a broad spectrum of opinions. Each piece of feedback was carefully evaluated and considered for integration into the subsequent iteration of the product. This iterative approach allowed for continual refinement and ensured that the final design resonated effectively with the target audience."}
        img1={reactPortfolio}
        ux={"In the UX process, I prioritized crafting an interface that seamlessly showcased my work while ensuring easy navigation for users. Drawing from the perspectives of friends, peers, and classmates, I honed in on creating an intuitive layout that highlighted my portfolio effectively. Through iterative testing and feedback sessions, I fine-tuned the design to ensure that visitors could effortlessly explore my projects, discovering the depth and breadth of my work with ease. By incorporating user insights, I not only refined the user experience but also established a platform that served as a captivating window into my creative endeavors."}
        development={"In the development phase, I focused on leveling up my React.js skills and diving into Animate.js to inject some creativity into the mix. It was all about getting hands-on with code and expanding my toolkit. With React.js, I dug deep into building robust components and mastering the art of card creation. Then, with Animate.js, I explored the world of animations, adding an extra layer of polish to the user experience. Through this process, I not only strengthened my technical skills but also learned how to bring a more dynamic and engaging touch to my projects. "}
        finalImages={[portfolio1, portfolio2, portfolio3]}
        learningOutcomes={"Across the entire process, from conception to completion, I made deliberate strides to showcase my work in a user-friendly manner while simultaneously expanding my technical repertoire. By harnessing React.js, I sharpened my ability to construct intuitive interfaces, perfecting the art of component creation and navigation. Moreover, integrating Animate.js into the mix injected an extra dose of creativity, elevating the user experience with captivating animations. This comprehensive approach not only highlighted my projects effectively but also underscored my dedication to embracing new technologies and advancing my skill set."}
        backToLink={"/webdevprojects"}
        backToWhere={"back to Web Development projects"}
    ></DetailProject>
    </>
    );
};

export default ReactPortfolio; 
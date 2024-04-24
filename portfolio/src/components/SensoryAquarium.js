import React from 'react';
import DetailProject from './DetailProject';
import sensoryHero from'../img/sensoryHero.png';
import sensory5 from '../img/sensory5.png';
import sensory2 from '../img/sensory2.png';
import sensory3 from '../img/sensory3.png';
import sensory4 from '../img/sensory4.png';

const SensoryAquarium = () => {
    return(
    <>
    <DetailProject
        projectTitle={"Sensory Aquarium"}
        projectDesc={"Interactive game designed for children with autism help regulate emotions through visual and auditory stimulation. Users first sort the fish into their correct places; once tthe tiles are placed, they can press on them to play a piano note, and optionally be guided through learning a simple piano melody."}
        projectLink={""}
        skills={["Phyiscal Computing", "Assistive Tech", "C++"] }
        goals={["Practice empathetic design through extensive research to create an assistive technology product that has potential to help real people", "Develop product throroughly from ideation to completion, incorportating UX/UI design concepts throughout", "Develop and advance skills in physical computing and C++ programming"]}
        designProcess={"Based on the goal of this project to explore the realm of assistive tech through phyiscal computing and product design, I ventured further into my passion for designing for children with learning disabilities. This required extensive research about techniques and methods to help children with autism regulate their emotions. Two methods that sparked my interest were shape sorting, visual and auditory feedback, and music therapy. From there, I ideated on how I could design a product that could help implement these functions into a fun and interactive device."}
        img1={sensory2}
        ux={"Due to the scope of this project, the extent of the user testing was based on user research and extensive research of the target demographic. In the future, I hope to be able to test the project with real users to garner better feedback and a better understanding of how the project would be used. Despite limited data from real users, I was able to gain feeback from other professionals and peers in order to iterate on my idea to find ways to implement the visual and auditory feedback as well as a fun interactive design. This allowed for the transition from a simple piano and shape sorting game into a more fun aquarium theme, as well as the guided piano melody mode."}
        development={"This project was a key catalyst in advancing my physical computing skills through C++ using an Arduino Nano Every. I had to find ways to translate visual and auditory feedback, shape sorting, and music therapy into a piece of technology, which meant lots of testing and iteration with different hardwares and learning how to code for a physical device. Since this project involved every step of the design process from design to manufacturing, I used several tools and techniques to arrive at the final product. For instance, I used tools such as SketchUp and Adobe Illustrator to document ideas and mockups. Soldering and circuitry was key in creating the hardware for the produc, as well as laser cutting for the final enclosure."}
        finalImages={[sensory3, sensory4, sensory5]}
        learningOutcomes={"Throughout the process of developing this project, I garnered skills in every step of the design process from brainstorming to building the final product, which allowed me to have a stronger understanding of the interplays between each step of the design process and how it impacts the acutual build process. This give me a big-picture understanding of both each step of the product design process as well as project management."}
        backToLink={"/productprojects"}
        backToWhere={"back to Product Design projects"}
    ></DetailProject>
    </>
    );
};

export default SensoryAquarium; 
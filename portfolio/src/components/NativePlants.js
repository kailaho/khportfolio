// NativePlants.js

import React from 'react';
import NativePlantsI1 from '../img/NativePlantsI1.JPG';
import NativePlantsFinal from '../img/plantWeb.png';
import DetailProject from './DetailProject';
import NativePlantsFinal2 from '../img/nativePlants2.png';
import NativePlantsFinal3 from '../img/nativePlants3.png';

const NativePlants = () => {
  return (
    <>
    <DetailProject
        projectTitle={"Colorado Native Plants Informational Website"}
        projectDesc={"A website that helps users become more familiar with the flora and fauna native to Colorado in a 3D and interactive manner"}
        projectLink={"https://project1-no9a3c9ae-kaila-hos-projects.vercel.app/"}
        skills={["HTML/CSS", "UX/UI Design", "Three.js"] }
        goals={["Practice key UX/UI design principles such as user testing and wireframing", "Learn a new JavaScript library and implement it in a meaningful manner", "Create an aestheically pleasing and easy to use website"]}
        designProcess={"The design process for this website was fairly in depth as I had to consider my skill level, learning a new library, and taking time to reflect on user feedback into my project. I had a clear idea of how I wanted the website to look and had to spend a lot of time working with Three.js and learning how to layer images in order to get the desired effect. One of the most difficult elements was the layered-image collage on the home page of the website, which took a lot of experiementing to get correct. Learning Three.js was an involved and interesting process, but after designing this website, I feel more confident in my abilities."}
        img1={NativePlantsI1}
        ux={"In order to conduct UX testing for this project, I participated in a critique in which I presented the work that I had so far to a large group and asked what their overall impression of the design, functionality, and overall appeal of the website. This feedback was greatly helpful moving forward into the next iteration of my design. Some of this feedback included the fact that my original design which included several 3D models on one page was difficult to navigate and that the loading time took far too long due to the volume of 3D models. So, I opted for the method of layering images on top of one another in order to get the hovering pop-up effect I desired, which made for a cleaner and more user-friendly design."}
        development={"The development process for this project required a lot of hands-on learning with the Three.js library. It took trial and error in order to figure out the correct camera angle for the 3D models I wanted to implement, how to scale the models, which kinds of models I could implement, and then integrating those skills with the web development skills I already had. I started by just playing with the Three.js library, and molded the design of my website around the new skills that I gained."}
        finalImages={[NativePlantsFinal, NativePlantsFinal2, NativePlantsFinal3]}
        learningOutcomes={"This project was a test of both my technical and design skills, and overall I feel that it strengthened both. It was a great way to explore a new library as well as bundling with Vite. The delpoyment process was difficult for me to navigate by myself, but with lots of troubleshooting, I was able to successfully deploy my website with all the features I had envisioned. This was a great opportunity to further develop my skills as a UX/UI designer and web developer and I am proud of the final product. I hope to expand upon it and include more plants that are native to Colorado, as this is something that I am passionate about and feel like could be valuable to other users. "}
        backToLink={"/webdevprojects"}
        backToWhere={"back to Web Development projects"}
    ></DetailProject>
    </>
  );
};

export default NativePlants;

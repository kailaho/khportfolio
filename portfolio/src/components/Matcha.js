import React from 'react';
import DetailProject from './DetailProject';
import matchaHero from '../img/matcha.png';
import matcha4 from '../img/matcha4.png';
import matcha5 from '../img/matcha5.png';
import matcha6 from '../img/matcha6.png';

const Matcha = () => {
    return(
        <>
        <DetailProject
        projectTitle={"Matcha Tea Packaging Desgin"}
        projectDesc={"Packaging design for matcha tea company that creates brand image based on appealing visual design, carefully crafted text, and logo."}
        projectLink={""}
        skills={["Phyiscal Computing", "Empathetic Design", "C++"] }
        goals={["Create brand image visually, practicing visual design skills", "Advance skills in Adobe Illustrator", "Create a cohesive brand image from logo to label rhetoric"]}
        designProcess={"The development of this design was based largely on reasearch of other matcha brands to understand what generally appeals to the target audience. It seems that these brands typically go for an earthy, natural look, which I then incorportated into a mood board for this project in order to have a better basis upon which to design the visual and textual elements of this brand."}
        img1={matcha4}
        ux={"The user testing for this project was based largely in feedback from peers in two phases: the moodboard and then iterations on the final design. After presenting the moodboard to peers, it was clear that they enjoyed the color pallette as well as the simplicity of the board, but wished that there was a bit more intrigue in some of the more simple designs. This inspired me to create a colorful and abstract yet simple design, which I then iterated on based on more extensive feeback."}
        development={"The development of this project was based in Adobe Illustrator to create flat mockups and the final presentation of the brand as well as Adobe Dimension to create the renders. This process allowed me to quickly iterate on ideas based on peer feedback, as well as create an appealing final design that encapsules a down-to-earth, natural brand."}
        finalImages={[matchaHero, matcha5, matcha6]}
        learningOutcomes={"This proejct was key in helping me understand key brand imaging and visual design processes through feedback from my peers as well as in depth research. It allowed me to explore how color, text, diction, and logo are received by an audience, and the power those elements have to shape the image of a brand."}
        backToLink={"/productprojects"}
        backToWhere={"back to Product Design projects"}
        > </DetailProject>
        </>
    );
}

export default Matcha;
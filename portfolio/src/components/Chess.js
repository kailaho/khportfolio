import React from 'react';
import DetailProject from './DetailProject';
import chess1 from '../img/chess1.png';
import chess2 from '../img/chess2.png';
import chess3 from '../img/chess3.png';
import chess4 from '../img/chess4.png';

const Chess = () => {
    return(
        <>
        <DetailProject
            projectTitle={"Precision Chess Set"}
            projectDesc={"Laser cut chess set focused on functionality and aesthetic product design"}
            projectLink={""}
            skills={["3D Modeling", "Product Development", "Laser Cutting and Manufacturing"]}
            goals={["Develop skills in 3D modeling", "Practice key principles of product design", "Use available technology to create a polished finished product"]}
            designProcess={"This chess set stemmed from my desire to want to explore using laser cutters to turn 2D designs into functional and visually appealing products. In the brainstorming process, I decided that I wanted my chess set to have two key components: a way for pieces to stay on the board without sliding, and a way to store the peices. I also wanted to create an appealing design through interlocking 2D wooden pieces designed in SketchUp and manufactured using laser cutting."}
            img1={chess3}
            ux={"In order to create an appealing design, this product went through user testing with peers in which they were asked questions about the design and feel of the pieces based on prototypes. The biggest goal in terms of user satisfaction was that the pieces were visually appealing and easy to place, yet also sturdy enough and cohesive enough with the board so that they did not move in case the board was bumped."}
            development={"The development for this product was based largely in SketchUp models in which I used 3D modeling techniques to ensure the size, shape, and final outcome of my project were functional and appealing. I created several 3D prototypes based on sketches I created in the ideation phase, and user tested with these prototypes to see how the design of the pieces and board would be received by users. The final phase of this project was the manufacturing phase, in which I used 1/8 inch wood panels and a laser cutter to cut out the 2D designs and then slot and glue them together into the final product."}
            finalImages={[chess1, chess2, chess4]}
            learningOutcomes={"This project was a good way for me to understand the key principles of 3D modeling and product design, learning how to use several design tools and practices to create a product that is visually and functionally appealing to users."}
            backToLink={"/productprojects"}
            backToWhere={"back to Product Design projects"}
        
        >
        </DetailProject>
        </>
    );
};

export default Chess;
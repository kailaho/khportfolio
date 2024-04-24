import React, {useEffect} from 'react';
import BannerAnimation from './BannerAnimation';
import ProjectCard from './ProjectCard';
//import Filler from '../img/blueCanvas.png';
//import stegoHero from '../img/formImg.png';
import chessHero from '../img/chessSet.png';
import matchaHero from '../img/matcha.png';
import sensoryHero from '../img/sensoryHero.png';
import rollerHero from '../img/rollerHero.png';

const ProductProjects = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    return (
        <>
        <BannerAnimation text={"Product Design Projects"}/>

        <ProjectCard
            title={"Sensory Aquarium"}
            img={sensoryHero}
            pitch={"Interactive game designed for children with autism help regulate emotions through visual and auditory stimulation"}
            description={"Using an empatheic design approach, this product focused on implementing researched methods that help children with autism better regulate their emotions. This product incoporates visual and auditory simlation, music therapy, and shape sorting in an interactive and engaging manner. Physical computing as well as working through the design process were key to the outcome of this piece of assistive technology."}
            skill1={"Physical Computing"}
            skill2={"Assistive Tech"}
            skill3={"C++"}
            text={"▶"}
            link={"/sensoryAquarium"}
        />

        <ProjectCard
            title={"Matcha Tea Package Design"}
            img={matchaHero}
            pitch={"Packaging design for matcha tea centered around creating brand image and visually inviting design"}
            description={"Tasked with creating an appealing design for any food product, this project showcases an ability to create strong brand image through visual design, logo, and phrasing. By using Adobe Illustrator and Dimension, I was able to create an appealing design and render to best showcase my design idea."}
            skill1={"Graphic Design"}
            skill2={"3D Rendering"}
            skill3={"Brand Image"}
            text={"▶"}
            link={"/matcha"}
        />


        <ProjectCard
            title={"Precision Chess Set"}
            img={chessHero}
            pitch={"Laser cut chess set focused on functionality and aesthetic product design"}
            description={"Focusing on creating a functional yet visually appealing product, the process of designing an developing this product focused on using 3D modeling software as well as laser cutting to design a 2D laser cutting file with several pieces that were slotted together to create the final product."}
            skill1={"3D Modeling"}
            skill2={"Product Development"}
            skill3={"Laser Cutting and Manufacturing"}
            text={"▶"}
            link={"/chess"}
        />

        <ProjectCard
            title={"Hand Compression Roller"}
            img={rollerHero}
            pitch={"Hand compression device designed for classroom use to help children with autism focus by creating a calming sensation."}
            description={"This was a client-based project focused on addressing a the needs of a teacher of children with autism, who expressed that many of her students were comforted and helped by deep pressure therapy. She wanted a device that could be housed in a desk that her students could interact with and experience deep pressue therapy to help calm them through compression. Our design team focused on these needs and worked to rapidly prototype and create a functional final product. Collaborators: Phoenix Bloomfield, Hannah Wilson, Tim Houck"}
            skill1={"Assistive Tech"}
            skill2={"Product Development"}
            skill3={"Rapid Prototyping"}
            text={"▶"}
            link={"/handCompression"}
            
        />

        {/* <ProjectCard
            title={"2D to 3D Stegosaurus"}
            img={stegoHero}
            pitch={"Applying a 2D to 3D manufacturing lens to creating a children's toy that can be assembled from flat pieces."}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend. Urna id volutpat lacus laoreet. Pharetra vel turpis nunc eget lorem dolor. In fermentum posuere urna nec tincidunt praesent. Duis ut diam quam nulla porttitor. Diam maecenas sed enim ut sem viverra aliquet eget. Justo nec ultrices dui sapien eget. Ut faucibus pulvinar elementum integer enim neque volutpat. Erat velit scelerisque in dictum non consectetur a. Faucibus in ornare quam viverra orci sagittis eu volutpat. Enim tortor at auctor urna. Id leo in vitae turpis massa sed elementum. Non blandit massa enim nec dui nunc mattis enim. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nisl condimentum id venenatis a condimentum vitae. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id."}
            skill1={"3D Modeling"}
            skill2={"Product Development"}
            skill3={"Laser Cutting and Manufacturing"}
            text={"▶"}
            link={"/steg"}  
        /> */}

        
        </>
    );
};

export default ProductProjects;
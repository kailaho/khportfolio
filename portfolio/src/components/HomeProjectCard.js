import React from 'react';
import '../styles/HomeProjectCard.css';


const HomeProjectCard = ({image, title, category, description}) => {
    return(
        <div id="CardWrapper">
            <div id = "ImageWrapper">
                <img id="Image" alt="filler" src= {image}/>
            </div>   
            <div id="Text">
                <h3>{title}</h3>
                <h4>{category}</h4>
                <p>{description}</p>
            </div>      
        </div>
    );
};

export default HomeProjectCard;
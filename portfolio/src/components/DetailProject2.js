// NativePlants.js

import React, {useState, useEffect} from 'react';
import '../styles/DetailProject2.css'; // Import your CSS file for styling
import LinkButton from './LinkButton';
import { Link } from 'react-router-dom';
import TitleAnimation from './TitleAnimation';


const DetailProject2 = ({projectTitle, projectDesc, projectLink, skills, goals, designProcess, img1, ux, development, finalImages, learningOutcomes, backToLink, backToWhere}) => {

        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        const changeImage = (direction) => {
          const newIndex = (currentImageIndex + direction + finalImages.length) % finalImages.length;
          setCurrentImageIndex(newIndex);
        };

        useEffect(()=>{
          window.scrollTo(0, 0);
        },[])

  return (
    <>
        <div id="detailWrapper">
            <div className="rowFlex2">
                <div className="colFlex2">
                    <TitleAnimation
                        text={projectTitle}
                    ></TitleAnimation>
                    <p>{projectDesc}</p>
                    <div className="rowFlex2">
                        
                    </div>
                    <div> <a className ="link" target="_blank" href={projectLink}>Project Link</a></div>
                </div>

                <div className="colFlex2">

                </div>

            </div>

        </div>
    </>
    
  );
};

export default DetailProject2;

import React, {useEffect} from 'react';
import '../styles/Home.css';
import HomeProjectCard from './HomeProjectCard.js';
import HomeAnimation from './HomeAnimation.js';
import hikeImg from '../img/hike.jpeg';
// import formImg from '../img/formImg.png';
import matchaImg from '../img/matcha.png';
import plantWeb from '../img/plantWeb.png';
import ScrollButton from './ScrollButton.js';
import TitleAnimation from './TitleAnimation.js';
import SeeMoreUXUI from './SeeMoreUXUI.js';
import SeeMoreWebDev from './SeeMoreWebDev.js';
import SeeMoreProducts from './SeeMoreProducts.js';
import portfolioProHero from '../img/portfolioproHero.png';
import STVideo from '../img/STVideo.mp4';
import SeeMoreST from '../components/SeeMoreST.js';


const Home = () => {


    return(
        <>
        
        <div id="wrapper">

        <div>
        <HomeAnimation/>
        </div>

        <div id="stHome">
            <div id="stCol1">
            <div id="stHomeDesc">
                <h1>ShineTime</h1>
                <p>ShineTime is a tool for families of children with ADHD. It is designed to encourage a better understanding of time management and task accomplishment while celebrating their unique way of understanding time.</p>
                <div id="seeMoreST">
                    <SeeMoreST />
                    </div>
            </div>
            <div className="vidBackground">
                <video id="homeVid" autoPlay loop muted>
                    <source src={STVideo} type= "video/mp4"/>
                </video>
            </div>
            </div>
            
            
        </div>

        <div id="CardContainer">
        <div className ="titleCardButton">
                <TitleAnimation className="title" text={"Web Development"}/>
                <HomeProjectCard
                image ={plantWeb}
                title = {"Colorado Native Plants"}
                category ={"Web Development"}
                description={"An exploration in Three.js and interactive website design"}
                />
               <SeeMoreWebDev/>
            </div>

            {/* ★ */}

            <div className ="titleCardButton">
                <TitleAnimation className="title" text={"UX/UI Design"}/>
                <HomeProjectCard
                image ={portfolioProHero}
                title = {"PortfoliPro"}
                category={"UX/UI Design"}
                description = {"Portfolio-sharing app for creative professionals"}
                />
                <SeeMoreUXUI/>
            </div>

            

            <div className="titleCardButton">
                <TitleAnimation className="title" text={"Product Design"}/>
                <HomeProjectCard 
                image = {matchaImg}
                title= {"Matcha Tea Package Design"}
                category = {"Product Design, Graphic Design"}
                description={"Achieving brand image through visual product design"}
                />
                <SeeMoreProducts/>
            </div>
        </div>
               

        </div>

        
        </>
    );
};

export default Home;
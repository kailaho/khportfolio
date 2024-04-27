import React, {useState, useRef, useEffect} from "react";
import shineTime2 from '../img/shineTime2.jpg';
import '../styles/ST.css';
import bannerImg from '../img/bannerImg.jpg';
import YouTubePlayer from "./VideoPlayer";
import oldIdea from '../img/shineTimeI1.png';
import I2P1 from '../img/I2P1.png';
import I2P2 from '../img/I2P2.JPG';
import I2P3 from '../img/I2P3.png';
import P1P1 from '../img/P1P1.JPG';
import P1P2 from '../img/P1P2.JPG';
import P1P3 from '../img/P1P3.JPG';
import P1P4 from '../img/P1P4.JPG';
import P2P1 from '../img/P2P1.JPG';
import P2P2 from '../img/P2P4.JPG';
import P2P3 from '../img/P2P3.JPG';
import laptopST from '../img/shineTimeFinal.png';
import LinkButton from '../components/LinkButton.js';
import { Link } from "react-router-dom";
import ST2 from '../img/shineTime2.jpg';
import ST3 from '../img/shineTime3.jpg';
import ST4 from '../img/shineTimeHero.jpg';
import ST5 from '../img/shineTime5.jpg';
import ST6 from '../img/shineTime6.jpg';
import shineTimePortal from '../img/ShineTimePortal.png';
import withCedar from '../img/withCedar.JPG';
import withCedar2 from '../img/withCedar2.JPG';







const ST = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])


    return(
        <>
        <div className = "columnFlex">

        <div>
            <h1 id="title">ShineTime</h1>
        </div>
        
        

        <div id="elevatorPitch">
           <p>ShineTime is a tool for families of children with ADHD designed to help parents guide children through better understanding time management and task accomplishment in a visual and engaging manner. Through a combination of technical innovation and user research, ShineTime became a project with real-world impacts that has the possibility to help families.</p>
        </div>

        <div id="video">
            <YouTubePlayer id="finalVideo"/>
        </div>
        
        <h1 id="journey">The Journey of ShineTime</h1>

        <div className = 'section'>
           <h2>Goals and Motivations</h2>
           <p>Task accomplishment and time management are key skills that are critical to the development of every child, but for children that may struggle with ADHD, it can be even more daunting. These children understand time in a way that is different from other children and may make it difficult for them to manage time and understand task sequences. This can lead to behavioral issues and low self esteem, as they may want to perform well in school or with tasks at home, but might lack the necessary skills to do so. 
	        </p>
            <p>
            Ever since working on a project designed for a client who is a teacher for children with autism, I have been passionate about assistive technology and how it can positively impact the lives of others. I was presented with the opportunity to work closely with a family in the ADHD community, and saw this as a problem space to which I could apply and develop my skills in product design, user research, programming, and web development to help make a tool that could have real impact. 
        </p>
        </div>

        <div className="section">
           <h2>Design Iteration</h2>
            <div className='rowFlex'>
            <p>It took several design iterations and prototypes to arrive at the final design for ShineTime; each phase provided new insight and feedback that was invaluable to the product. 
            The original idea for ShineTime was inspired by the idea of “Time Banking,” the concept that a user could be allotted a certain amount of time for a particular task, and any time left over could be stored in a “bank,” which they could then use for an activity of their choice later on. The child would interact with a device similar to the one pictured to the right. The concept featured a removeable timer that the child would take with them to complete a task, then place it back on the platform when finished, adding any remaining time to their time bank.
            </p>
            <img className="oldIdea" src={oldIdea} alt="The original time banking idea for ShineTime, consisting of a platform with a removeable timer"/>
            </div>

            <p>
            After pitching this idea, I received feedback that this design might be too harsh for a child and could trigger failure sensitivity, or the idea that if the child feels as if though they are failing, they may be discouraged from further engaging with the product. Based on this insight, it was back to the drawing board, where eventually the idea for a more flexible and visually friendly design was created. This idea included the implementation of several modes, which the parent could choose between based on their child’s unique learning styles and understanding of time. It also includes a reward system that can be more easily implemented into an existing system or routine that the family may already have.            </p>
            <div className="rowFlex">
                <img className='scaleDown' src={I2P1} alt="mock up of new idea, flower shape"/>
                <img className='scaleDown' src={I2P2} alt="mock up of new idea, website"/>
                <img className='scaleDown' src={I2P3} alt="brainstorming sketches of new idea"/>
            </div>
            <p>
            Additionally, this iteration of the product would include bluetooth connectivity, ensuring easy customization for the parent through a web portal, as well as a place for critical information and resources. Ultimately, after some user testing and feedback, this became the final idea for the product and it was time to move forward with development. 
            </p>
        </div>

        <div className = "section">
           <h2>Development</h2>
            <p>Because of the need for interaction between the physical timer and the online portal, a complex technical pipeline was needed to execute the proper functionality. In order for the timer and website to be able to communicate, I used an Arduino Uno with an Arduino Nano Iot33, which uses Bluetooth Low Energy (BLE) to communicate with the React website via the Web Bluetooth API. </p>
            <p>The project required both intensive coding and fabrication, which meant several prototypes were needed to test the functionality of the product. The first cardboard prototype was critical in understanding the housing of the key components such as the Arduinos, light strips, and DFP Mini-Player (for higher-quality sounds). </p>
            <div className="rowFlex">
                <img className='scaleDown2' src={P1P1} alt="cardboard prototype 1"/>
                <img className='scaleDown2' src={P1P2} alt="pieces of the prototype"/>
                <img className='scaleDown2' src={P1P3} alt="prototype in action"/>
                <img className='scaleDown2' src={P1P4} alt="hardware component testing"/>
            </div>
            <p>After creating and user testing the first prototype, I gained valuable insight into the appeal of the design, how to situate all necessary components, and most importantly, how the design was being received by my target audience. Based on user testing in this phase, it became clear that the colors I chose for the lights had certain implications and created certain moods (red was perceived as threatening), as well as the sounds that the timer makes (a chime vs. ringing alarm clock). I also decided to upgrade the screen to a nicer LCD screen based on feedback that the original one was unpleasant to look at. The different modes that I implemented were well received. These better informed me in moving forward in my design and fabrication process.</p>
            <div className="rowFlex">
                <img className='scaleDown' src={P2P1} alt="gluing together final product"/>
                <img className='scaleDown' src={P2P2} alt="close up of underneath the top circle"/>
                <img className='scaleDown' src={P2P3} alt="back panel showing hardware housing"/>
            </div>
            <p>For the final product, I was able to use wood and laser cut each component, layering curved shapes for the desired look. Each step and added feature brought with it complex technical problems that I spent countless hours troubleshooting. The most challenging features were the bluetooth implementation due to the unreliable nature of BLE, which caused problems with code parsing. Additionally, the DFP Mini MP3 player is notoriously difficult to work with, and since both the Arduino Iot 33 and mp3 player use serial communication, this posed several issues as well. However, after intensive technical work and troubleshooting, I was finally able to arrive at the final (for now) product. </p>
        
        </div>

        <div className="section">
           <h2>Final Product</h2>
           <div className="rowFlex">
            <img className='scaleDown3'src={laptopST} alt="image of timer hung on wall with laptop displaying web portal in front"/>
            
            <div className="columnFlex">
            <Link style={{width:'10em', color: 'white', marginTop: '1.5em', backgroundColor: 'black', padding: '1em', textDecoration: 'none', borderRadius:'3em', boxShadow: '0 4px 8px rgba(128, 128, 128, 0.5) '}} to={"https://shineTimePortal.vercel.app"} target="_blank">ShineTime Web Portal</Link>
            <p>ShineTime features several modes, interactions, and customizations that help create the best experiences for families of children with ADHD. The modes include:</p>
            <ul>
                <li><span className='makeBold'>Chime and Time</span>: a simple timer that can be set for 1 - 60 minutes, with the option to play a sound at the changing of each petal or at a specified interval.</li>
                <li><span className='makeBold'>Sequential Timer</span>: parents can set a series of timers to start once the child presses the button on the timer, removing the need to set one timer after another.</li>
                <li><span className='makeBold'>Negative Time</span>: once the timer is up, the clock starts counting up again, displaying the time that has passed since the end of the timer, helping convey the idea that time moves on even if a task is incomplete.</li>
                <li><span className='makeBold'>Time Banking</span>: parents can allot a certain amount of time for a task. The timer begins once the child presses the button on the timer, and once they complete the task, they can press it again, displaying any time that they may have saved.</li>
            </ul>
            <p>In each mode, parents have the option to customize the color of the lights, sound, and reward so that their child can have the best experience with ShineTime. The row of lights at the bottom of the clock indicate the child’s progress towards earning their reward, which can be an incentive system that the child and parent can discuss and implement together into their existing routine, if so desired. Parents can choose whether or not their child earns a reward after a timer is complete using the web portal, and once the child reaches 10 points, they have earned their reward. </p>
            </div>
           </div>
           <p>More project images:</p>
           <div className="rowFlex">
                <img className='scaleDown' src={ST2} alt="angle of timer"/>
                <img className='scaleDown' src={ST6} alt="up close of screen"/>
                <img className='scaleDown' src={ST4} alt="photo of timer"/>
            </div>
            <div className = "rowFlex">
                <img className='scaleDown' src={shineTimePortal} alt="screenshot from website"/>
                <img className='scaleDown' src={ST5} alt="another angle of timer"/>
                <img className='scaleDown' src={withCedar} alt="a photo from user testing"/>
            </div>
        </div>

        <div className = 'section'>
            <h2>Looking Forward</h2>
            <div className = "rowFlex">
            <img style={{width: '30%', marginTop:'1em', marginRight: '1em',height: '30%', padding: '1em'}}src={withCedar2} alt="me and cedar on a user testing day"/>
            <div>
            <p>This project has been an amazing opportunity to develop my skills as a product designer, programmer, and user research and design professional. Not only did I develop my professional and technical skills, I now have a better understanding of what it means to design empathetically, and was able to further explore my passion for assistive technology. </p>
            <p>While I am proud of the product I created, there are always questions to be asked and improvements to be made. For example, I didn’t consider that this product would be appealing to people outside of the target audience – many friends and adults said that they would like to use this product for themselves. I find myself asking: are there other modes that need to be considered? How could I better test my product in the future? What other technical features could enhance the user’s experience? </p>
            <p>I would like to give a special thanks to my mentors, Wayne Seltzer and Aidan Chopra, who were invaluable in both technical and design applications. Aidan and his son Cedar were extremely helpful and patient in several rounds of user testing, and I cannot thank them enough.</p>
            </div>
    
            </div>
        </div>

        </div>
        </>
    );
}

export default ST;
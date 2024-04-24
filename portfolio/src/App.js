/*Notes:
-Look into github student pack for domain name
-Copilot 
*/

import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import UXUIProjects from './components/UXUIProjects';
import WebDevProjects from './components/WebDevProjects';
import ProductProjects from './components/ProductProjects';
import Contact from './components/Contact';
import NativePlants from './components/NativePlants.js';
import GnomeStyler from './components/GnomeStyler.js';
import BuffBuffs from './components/BuffBuffs.js';
import PortfoliPro from './components/Portfolipro.js';
import ReactPortfolio from './components/ReactPortfolio.js';
import SensoryAquarium from './components/SensoryAquarium.js';
import Matcha from './components/Matcha.js';
import Chess from './components/Chess.js';
import HandCompression from './components/HandCompression.js';
import Steg from './components/Steg.js';
import ST from './components/ST.js';

function App() {
  return (
   <Router>
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" exact element = {<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/uxuiprojects" element={<UXUIProjects/>}/>
        <Route path="/webdevprojects" element={<WebDevProjects/>}/>
        <Route path="/productprojects" element={<ProductProjects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/nativePlants" element={<NativePlants/>}/>
        <Route path="/gnomeStyler" element={<GnomeStyler/>}/>
        <Route path="/buffBuffs" element={<BuffBuffs/>}/>
        <Route path="/portfoliPro" element={<PortfoliPro/>}/>
        <Route path="/portfolio" element={<ReactPortfolio/>}/>
        <Route path="/sensoryAquarium" element={<SensoryAquarium/>}/>
        <Route path="/matcha" element={<Matcha/>}/>
        <Route path="/chess" element ={<Chess/>}/>
        <Route path="/handCompression" element={<HandCompression/>}/>
        <Route path="/steg" element={<Steg/>}/>
        <Route path="/st" element={<ST/>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
const profileImage = require('./img/profile.jpg');

const App = ()=>{

  return (
      <>
        <Home />
        <Work />
        <Disc />
        <Bisc />
      </>
  );

}

const Home =()=>{
    return(
      <header id ="home" className ="page home-section">
          <section id ="top">
              <span> View CV </span>
          </section>
          <div id ="profile-container">
              <img src = {profileImage} alt = "0"  />
              <h1 id="profile-description" >
                <span >I'm Chomo Gwom, a Web Developer based in Johannesburg, South Africa.</span>
              </h1>
                <button className ="chevron-down" >
                  <FontAwesomeIcon icon={faChevronCircleDown} size="2x" stroke="none" title ="Chevron Down" color ="#fffc30" />
                </button> 
          </div>
      </header>
    );
}


const Work = () =>{
  return (
    <section id ="work" className ="page" style={{backgroundColor: '#B7DAED'}}>
      <header className ="section-header">
        <FontAwesomeIcon className ="page-icon" icon={faLaptopCode} size="lg" title ="My work" color ="#fffc30" />
        <h1 className = "page-title">
          I <strong>design  and build </strong> web applications. I currently work as <br/>a freelance developer.  
        </h1>  
        
      </header>
        
    </section>
  );
}

const Disc = () =>{
  return (
    <header id ="home" className ="page" style={{backgroundColor: '#F7C2D4'}}>
       
    </header>
  );
}

const Bisc = () =>{
  return (
    <header id ="home" className ="page" style={{backgroundColor: '#fffc4a'}}>
       
    </header>
  );
}
export default App;



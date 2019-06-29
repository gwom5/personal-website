import React from 'react';
import './App.css';
const profileImage = require('./img/profile.jpg');

const App = ()=>{

  return (
      <>
        <Home />
        <Misc />
      </>
  );

}

const Home =()=>{

    return(
      <header id ="home" className ="page home-section">
          <div id ="top">
            <div id ="resume">
              <span> Download CV </span>
            </div>
          </div>
          
          <div id ="profile-container">
              <img src = {profileImage} alt = "0" height = "150" width = "150"  />
              <h1 id="profile-description" className ="type">
                I'm Chomo Gwom, a Web Developer <br/> based in Johannesburg, South Africa.
              </h1>
          </div> 
      </header>
    );
}


const Misc = () =>{
  return (
    <header id ="home" className ="page home-section">
        <div id ="top">
          <div id ="logo">
            Chomo
          </div>
          <div id ="resume">
            <span> Download CV </span>
          </div>
          
        </div>
      </header>
  );
}

export default App;



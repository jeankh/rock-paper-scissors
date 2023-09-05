import React from 'react';
import "./header.css";
import logo from "../assets/logo.svg";


function Header({score}) {


  return (
    <div className='header'>
        <img className='logo' src={logo} alt="SVG logo " />
        <div className='score'>
            <h2>score</h2>
            <h1>{score}</h1>

        </div>
    </div>
  )
}

export default Header
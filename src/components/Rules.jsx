import React from 'react'
import "./rules.css"
import rules from "../assets/image-rules.svg";
import close from "../assets/icon-close.svg";

function Rules({toggleRules}) {


  return (
    <div className='rules'>
      <div className='top'>
        <h1>RULES</h1>
        <button onClick={toggleRules}> <img src={close} alt="Svg close" /> </button>
      </div>
      <img className='rules-img' src={rules} alt="Svg rules" />

    </div>
  )
}

export default Rules
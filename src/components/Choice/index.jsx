import React from 'react';
import "./choice.css"; 
import paper from "../../assets/icon-paper.svg";
import rock from "../../assets/icon-rock.svg";
import scissors from "../../assets/icon-scissors.svg";

function Choice({handleChoise}) {
  return (
    <div className='choice'>
      <button className='btn paper' onClick={()=>handleChoise('paper')}><img src={paper} alt="Svg paper" /></button>
      <button className='btn scissors' onClick={()=>handleChoise('scissors')}><img src={scissors} alt="Svg scissors" /></button>
      <button className='btn rock' onClick={()=>handleChoise('rock')}><img src={rock} alt="Svg rock" /></button>
    </div>
  )
}

export default Choice;

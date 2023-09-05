import React, { useEffect, useState } from 'react';
import "./result.css";
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";


function Result({userChoice, computerChoice, handleWinner,handlecomputerChoice ,result, handlePlayAgain}) {
    const pickCss={'paper':'pick is-paper','rock':'pick is-rock','scissors':'pick is-scissors' };
    const svg={'paper':paper,'rock':rock,'scissors':scissors };
    const [showComputerChoice , setShowComputerChoice] = useState(false);
    const [showWinner, setShowWinner] = useState(false);


    handlecomputerChoice();
    handleWinner(userChoice, computerChoice);
    useEffect(() => {

        console.log('user : '+userChoice);
        console.log('coputer : '+computerChoice);

        const timer = setTimeout(() => {
            setShowComputerChoice(true);
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
      }, []);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setShowWinner(true);
        }, 2000);
    
        return () => {
          clearTimeout(timer);
        };
      }, []);
    

  return (
    <div className='result'>
        <div className='header-titles'>
            <h1>you picked</h1>
            <h1>the house picked</h1>

        </div>
        <div className='picks '>
            <div className={pickCss[userChoice]}><img src={svg[userChoice]} alt={'svg '+userChoice} /></div>
            {showComputerChoice 
            ? (<div className={pickCss[computerChoice]}><img src={svg[computerChoice]} alt={'svg '+computerChoice} /></div>)
            : <div className='empty'></div>
             }
        </div>
        { showWinner ? (<div className= 'winner'>
            <h1>{result}</h1>
            <button onClick={()=>handlePlayAgain()}>play again</button>

        </div>) : <div></div>
        }

      
       


    </div>
  )
}

export default Result
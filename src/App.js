import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faDeleteLeft, faCalculator, faEquals } from '@fortawesome/free-solid-svg-icons';

function App(){
  const [result, setResult] =useState("");

  const handleClick = (e) => {
      setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, result.length -1));
  }

  const calculate = () => {
    try{
      setResult(eval(result).toString());
    }catch(err){
      setResult("Error")
    }
  }  

  return(
    <>
      <div className="container bgred">
      <FontAwesomeIcon icon={faCalculator} className="calci" />
      <div className="inputContainer">
        <input type="text" className="input" placeholder="0" value={result}/>
      </div>
      

        <div className="buttonContainer">

          <button onClick={clear} className="button" id="clear">AC</button>
          <button onClick={backspace} className="button" id="backspace"><FontAwesomeIcon icon={faDeleteLeft} /></button>
          <button onClick={handleClick} className="button" name="%">%</button>
          <button onClick={handleClick} className="button" name="/">&divide;</button>

          <button onClick={handleClick} className="button" name="7">7</button>
          <button onClick={handleClick} className="button" name="8">8</button>
          <button onClick={handleClick} className="button" name="9">9</button>
          <button onClick={handleClick} className="button" name="*">&times;</button>

          <button onClick={handleClick} className="button" name="4">4</button>
          <button onClick={handleClick} className="button" name="5">5</button>
          <button onClick={handleClick} className="button" name="6">6</button>
          <button onClick={handleClick} className="button" name="-">&ndash;</button>

          
          <button onClick={handleClick} className="button" name="1">1</button>
          <button onClick={handleClick} className="button" name="2">2</button>
          <button onClick={handleClick} className="button" name="3">3</button>
          <button onClick={handleClick} className="button" name="+">+</button>

          
          <button onClick={() => {
    const confirmBox = window.confirm(
      "Are you sure you want to leave?"
    )
    if (confirmBox === true) {
      window.close();
    }}} className="button"><FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
          <button onClick={handleClick} className="button" name="0">0</button>
          <button onClick={handleClick} className="button" name=".">.</button>
          <button onClick={calculate} className="button"><FontAwesomeIcon icon={faEquals} /></button>


        </div>
      </div>
    </>
  );
}

export default App;
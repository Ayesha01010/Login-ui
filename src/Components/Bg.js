import "./Bg.css";
import Inputs from "./Inputs";
import react, { useState } from "react";

function Bg(props) {
  
const savedDataHandler = (enterData)=> {
    const enteredData = {...enterData.toString()}; 
   console.log(enterData)
}
  

  
  

  return (
    <div className="Background">
      <Inputs wh={props.wh} onSaveData={savedDataHandler} />
    </div>
  );
}

export default Bg;

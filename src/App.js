import Bg from "./Components/Bg";
import Warning from "./Components/Warning";
import react, {useState} from "react";
import Progress from "./Components/Progress";

function App(props) {
  const [display, setDisplay] = useState('none')
  const password = 0




  const warningHandler = (event) => {
    event.preventDefault();
    setDisplay('flex')
  };

  console.log(props.value)
 


  return (
    <div>
      <Progress />
      <Bg wh={warningHandler} password={password}/>
      <Warning style={display} />
      
    </div>
  );
}

export default App;

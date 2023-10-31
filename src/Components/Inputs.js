import "./Inputs.css";
import react, {useState} from "react";



function Inputs(props) {

  

  
 const [value, setValue] = useState(props.password)

  const passwordHandler = (event) => {
    setValue(event.target.value)  
    
  }
  const enteredData = {
    password : value
  };
  console.log(enteredData[0])
  props.onSaveData(enteredData)
  

  

  return (
    <form onSubmit={props.wh} className="field">
      <div className="input-field">
        <div className="username">
          <label >Username </label>
          <input className="field" type="text" name="username" />
        </div>
        <div className="password">
          <label>Password </label>
          <input
            onChange={passwordHandler}
            className="field"
            type="text"
            name="password"
          />
        </div>
        <button  className="btn">
          Login
        </button>
      </div>
    </form>
  );
}

export default Inputs;

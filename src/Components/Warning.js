import './Warning.css';

function Warning(props) {






  
  return <div>
    <p className="warning" style={{display:`${props.style}`}}>You Have Entered Incorrect Email or Password</p>
  </div>;
}
export default Warning;

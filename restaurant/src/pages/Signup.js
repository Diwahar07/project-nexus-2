
import axios from 'axios';
import { React, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
function Signup() {


  const [input, setInput] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [error, setError] = useState(null);

  const navigate=useNavigate();


  const handleChange=(e)=>{
    setInput((pre)=>({...pre,[e.target.name]: e.target.value}));
  }

  const handleClick=async (e)=>{
      e.preventDefault();

      try{
        await axios.post("/auth/signup",input);
        navigate('/login');

      }
      catch(err){
        setError(err.response.data);
      }
  }
 const handleClose=()=>{
  navigate('/');
 }
  
  return (
    <div className='auth'>

      <div className='login'>
      <p className="cls"onClick={handleClose} ><FontAwesomeIcon icon={faXmark} /></p>

        <h1>Sign up </h1>

        <form>

          <div className='inputDiv'>
          
            <input required type="text" placeholder='&#xf007;   username' name='username' onChange={handleChange} /></div>
          <div className='inputDiv'>
           
            <input required type="text" placeholder='&#xf0e0;   email' name='email' onChange={handleChange} /></div>

      
      <div className='inputDiv'>
      
        <input required type="password" placeholder='&#xf023;   password' name='password' onChange={handleChange} />
      </div>
      { error && <p>{error}</p>} 
      <button onClick={handleClick}>SIGN UP</button>

      <span>Already have an account?<Link  className="link goto" to="/login">Login</Link></span>
    </form>
      </div >
    </div >
  )
}

export default Signup


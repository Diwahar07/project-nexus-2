import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

const Login = () => {

  const [input, setInput] = useState({
    email:"",
    password:""
  });

  const[error,setError]=useState(null);
  const navigate=useNavigate();

  const handleChange=(e)=>{
    setInput((pre)=>({...pre,[e.target.name]:e.target.value}));
  }

  const handleClick= async (e)=>{
    e.preventDefault();
    try{
       await axios.post('/auth/login',input)
    navigate('/');}
    catch(err){
      setError(err.response.data);
    }
   
  
  }
  const handleClose=()=>{
    navigate('/');
  }
  return (
    <div className='auth'>
      <div className='login '>
        <p className="cls" onClick={handleClose} ><FontAwesomeIcon icon={faXmark} /></p>

        <h1>Log in</h1>
        <form>
          <div className='inputDiv'>
          
          
            <input required type="email" className='ic' placeholder="&#xf0e0;   email" name="email" onChange={handleChange} />
          </div>
          <div className='inputDiv'>
            
            <input required type="password" placeholder='&#xf023;   password' name="password"  onChange={handleChange}/>
          </div>
           {error && <p>{error}</p>}
          <button onClick={handleClick}>Login</button>

          <span>Don't have an account? <Link className='link goto' to="/Signup">Sign up</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login

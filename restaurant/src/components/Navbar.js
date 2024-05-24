import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
      
<div className="navbar">
  <div className="container">
    <div className="logo">
      <Link className='lName' to="/"><h1>mEaN</h1></Link>
      <span>meet eat and laugh</span>
      </div>

    <div className="links">
      <Link className='link h' to="/"><h6>Home</h6></Link>
      <Link className='link h' to="/menu"><h6>Menu</h6></Link>
      <Link className='link h' to="/about"><h6>About us</h6></Link>
      <Link className='link h' to="/contact"><h6>Contact</h6></Link>

      <div className='links log'>
      <Link className="link logbtn" to="/login">
          Login
        </Link>
        <Link className="link h" to="/signup">
          Signup
        </Link>
    
      </div>
        
    </div>
  </div>
</div>
</div>
    
  )
}

export default Navbar

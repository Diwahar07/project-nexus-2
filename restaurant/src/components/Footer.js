import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div >
      <Footer>
        <div className='foot'>
          <h2>Opening time</h2>
          <div>
            <h4>Monday-Thursday</h4>
            <p>
              9AM - 10PM
            </p>
          </div>
          <h4>friday-sun</h4>
            <p>
              9AM - 12PM
            </p>

        </div>
        <div className='foot'>
           <ul>
            <li>
            <FontAwesomeIcon icon={faPhone} />
            
            <span> +91  4324141221</span>
            </li>
            <li>
            <FontAwesomeIcon icon={faEnvelope} />

            <span>mEaN@gmail.com</span>
            </li>
            <li>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>93,2nd crosscut road,Coimbatore</span>
            </li>
            <li>
              
            </li>
           </ul>
        </div>
      </Footer>
        
    </div>
  )
}

export default Footer

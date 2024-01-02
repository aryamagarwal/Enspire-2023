import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
  return (
    <>
    <hr/>
    <div id="footer">
      <div className="footItem">
        <img src={require('./Assets/ecell-logo.png')} alt="Ecell Logo" id="logo" />
        <h1>E-CELL, IIIT Lucknow</h1>
        <h4>Don't Just Fly, Soar With Us</h4>
      </div>
      <div className="footItem">
        <h1>Quick Links</h1>
         <a href="https://ecell-iiitl.netlify.app/">E-CELL IIIT Lucknow</a>
         <Link  to='./events' className="menuLink">Events</Link>
         <Link  to='./team' className="Team">Team</Link>
         <a href="https://iiitl.ac.in">IIIT Lucknow</a>
       </div>
     </div> 
    <div className="footBottom">
      <h4>© 2024. All rights reserved.</h4>
    </div>
    </>
  )
}

export default Footer

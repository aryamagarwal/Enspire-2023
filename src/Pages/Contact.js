import React from 'react'
import { useState } from 'react'
import './Contact.css'
function Contact() {
    const [state , setState] = useState("Enter your message here.")
  return (
    <div>
      <form action="">
        <label htmlFor="name">Enter Name</label>
        <br />
        <input type="text" id="name" />
        <br />
        <label htmlFor="email">Enter Email</label>
        <br />
        <input type="email" id="email" />
        <br />
        <br />
    <textarea placeholder='Enter your message here' onChange={(e)=>
        {
          setState(e.target.value)  
        } } value={state}  name="" id="" cols="30" rows="10"></textarea>
        <br />
        <br />
        <button className="eventBtn">Send Message</button>

      </form>
    </div>
  )
}

export default Contact

import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import enspire from './Assets/enspire-logo.png'

function Navbar() {
    var check=false;
    const toggle = ()=>
    {
       check=!check;
       const verMenu=document.querySelector('.navMenuVer');
       if(check)        
       {
        verMenu.style.display="flex";
       }
       else
       verMenu.style.display="none";
    }
    const menuItem=[{name: "Home" , link: "/"} ,{ name: "Events" , link: "/events"} , {name: "Sponsors" , link: "/sponsors"} , {name: "Team" , link: "/team"} , { name: "Contact Us" , link: "/"}];
    
  return (
    <>
    <div className="nav">
        <div className="navHead">
            <Link to="/" className="name"><img src={enspire} alt="logo" /></Link>
        </div>
        <div className="navMenu">
           {
                menuItem.map((val , key)=>(
                    <Link key={key} to={val.link} className="menuLink"><span  className="menuItem">{val.name}</span></Link>))
            }
        </div>
        <button className="navBtn" onClick={toggle}>
            <div className="bar">Enspire</div>
            <div className="bar"></div>
            <div className="bar">2  0  2  3</div>
        </button>
    </div>
    <div className="navMenuVer">
    {
                menuItem.map((val , key)=>(
                    <Link key={key} to={val.link} className="menuLink"><span  className="menuItem">{val.name}</span></Link>))
            }
    </div>
    </>
  )
}

export default Navbar

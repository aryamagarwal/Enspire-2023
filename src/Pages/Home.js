import React from 'react'
import './Home.css'
import edusp from '../Components/Assets/markoknow.png'
import titsp from '../Components/Assets/insyst.jpeg'
import eventsp from '../Components/Assets/stockpe.png'
import merch from '../Components/Assets/merch.png'
import aman from '../Components/Assets/aman.jpeg'
import kalpit from '../Components/Assets/kalpit.jpeg'
import sanjeev from '../Components/Assets/sanjeev.jpeg'
import deepshika from '../Components/Assets/deepshika.png'
const styleHead={
  textAlign: "left",
  color: "white",
  fontSize: "5vw",
  paddingLeft:"60px",
  fontFamily: "Space Grotesk,sans-serif",
}
const styleHead2 ={
  textAlign: "left",
  color: "#30aebc",
  fontSize: "5vw",
  marginLeft: "10px",
  fontFamily: "Space Grotesk,sans-serif",
}
const speakers=[
  {
    name: "Aman Dhattarwal",
    des: " He is an Indian youtuber with over 4 million subscribers, an Educator, a Public speaker, a Career counselor and a Tastemaker" ,
    url: aman,
  },
  {
    name: "Kalpit Veerwal",
    des: " Kalpit is a graduate of IIT bombay and is presently the founder and CEO of Acadboost. Kalput incredibly achieved a score of 360/360 in one of the most prestigius exams of India, JEE Mains and is also featured in the Limca book of records" ,
    url: kalpit,
  },
  {
    name: "Sanjeev Bikchandani",
    des: ' He is a major investor in the Indian economy, "the Naukri man" is a major shareholder in unicorn companies like Zomato and policybazzar. He draws his wealth from "Info Edge (India) Ltd". The company is an innovator who brought us various services like naukri.com, jeevansathi.com, 99acres.com and shiksha.com' ,
    url: sanjeev,
  },
  {
    name: "Deepshika Kumar",
    des: "Deepshikha Kumar is the founder and Managin partner at Speakin - India's first and largest consortium of business experts servicing over 200 ares of expertise. She is the winner of the 2017 Asia Women Icon award for Entrepreneuership" ,
    url: deepshika,
  },
]
window.onscroll = function(){
var scrollTop =  (document.documentElement || document.body.parentNode || document.body).scrollTop
let textBlocks = document.querySelectorAll(".slide");
for(let i =0;i<textBlocks.length ;i+=1){
      if(i%2){
          textBlocks[i].style.transform = "translateX( calc( -20px + " + scrollTop/6 + "px))";
      }else{
          textBlocks[i].style.transform = "translateX(-" + scrollTop/6 + "px)";
      }
    
  }
}
const details=[ {name: "Markoknow" , position:"Education Sponsor" , url:edusp} , {name: "Insyst Labs" , position:"Title Sponsor" , url:titsp} , {name: "StockPe" , position:"Event Sponsor" , url:eventsp} ]
function Home(props) {

  return (
    <>
    <div className="mainContent">
    <div className="textBelow">
    <div className="slide" >
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    </div>
    <div className="slide" >
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    </div>
    <div className="slide" >
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    </div>
    <div className="slide" >
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    </div>
    <div className="slide" >
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    </div>
    </div>
    
    <div className="textBelow2">
    <div className="slide" >
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    </div>
    <div className="slide" >
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    </div>
    <div className="slide" >
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    </div>
    <div className="slide" >
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    <span>ENSPIRE.</span><span>2O23.</span><span>INNOVATION-</span><span>ODYSSEY.</span>
    </div>
    </div>
    <div className="colorText">
    <h1>E N S P I R E</h1>

    </div>
    </div>
    <span style={styleHead}>Our </span><span style={styleHead2}>SPONSORS</span>
    <div id="team">
    {
          details.map((val , key) =>
          (
            <div id="key" className="tMem">
              <img className="profphoto" src={val.url} alt="Profile Photo" />
              <div className="txt">
                <h2 className="tMemName">{val.name}</h2>
                <h3 className="tMemPos">{val.position}</h3>
                
              </div>
            </div>
          ))
        }
        </div>
        <span style={styleHead}>Exclusive </span><span style={styleHead2}>MERCH</span>
        <div className="merch">
          <div>
            <h3>Get Exclusive Merch from custom handmade pieces right here</h3>
            <button className="eventBtn">Buy Now</button>
            </div>
          <img src={merch} alt="Merch" id="merchImg" />
        </div>
        <span style={styleHead}>Past </span><span style={styleHead2}>SPEAKERS</span>
        {
        speakers.map((val)=>
        (
          <div className="speakers">
            <img src={val.url} alt="Speaker" className="speakerImg" />
          <div className="speakerDes">
            <h1>{val.name}</h1>
            <h4>{val.des}</h4>
            </div>
          
        </div>
        ))
}
    </>
  )
}

export default Home

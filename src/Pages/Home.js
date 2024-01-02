import React from 'react'
import './Home.css'
import edusp from '../Components/Assets/markoknow.png'
import titsp from '../Components/Assets/insyst.jpeg'
import eventsp from '../Components/Assets/stockpe.png'
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
    <span style={styleHead}>OUR </span><span style={styleHead2}>SPONSORS</span>
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
    </>
  )
}

export default Home

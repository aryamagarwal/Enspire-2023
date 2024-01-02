import React from 'react'
import TeamMember from '../Components/teamMember'
import devShah from '../Components/Assets/devShah.jpeg'
function Team() {
  const styleHead={
    textAlign: "left",
    color: "white",
    fontSize: "64px",
    paddingLeft:"60px",
    fontFamily: "Space Grotesk,sans-serif",
  }
  const styleHead2 ={
    textAlign: "left",
    color: "#30aebc",
    fontSize: "64px",
    marginLeft: "10px",
    fontFamily: "Space Grotesk,sans-serif",
  }
  return (
    <>
    <span style={styleHead}>MEET THE</span><span style={styleHead2}>TEAM</span>
    <div style={{padding:"0px" , margin:"0"}}>
      <TeamMember title="Coordinators"
      details={[ {name: "Dev Shah" , position:"Coordinator" , url:'./Assets/devShah.jpeg'} , {name: "Admya Maini" , position:"Coordinator" , url:'./Assets/admyaMaini.jpg' } ]}
      />
       <TeamMember title="Cell-Executives"
      details={[ {name: "Mudit Yadav" , position:"Cell-Executive" , url:'./Assets/muditY.jpeg'} , {name: "Arsh Katkar" , position:"Cell-Executive" , url:'./Assets/arshKatkar.jpg'} ]}
      />
      <TeamMember title="Developers"
      details={[ {name: "Karthik S" , position:"Developers Head" , url:'./Assets/karthikS.jpg'} , {name: "Deepak Chattwani" , position:"Developers Head" , url:'./Assets/deepak.png'} ]}
      />
      <TeamMember title="Initiators"
      details={[ {name: "Tushar Agarwal" , position:"Initiators Head" , url:'./Assets/tusharAg.jpg' } ]}
      />
      <TeamMember title="Content"
      details={[ {name: "Aashish Papneja" , position:"Content Head" , url:'./Assets/aashishp.jpg'} , {name:"Sakshi Sharma" , position: "Content Head" , url:'./Assets/sakshiS.jpg' }]}
      />
      <TeamMember title="Media"
      details={[ {name: "Aryan Kumar" , position:"Media Head" , url:'./Assets/aryanK.jpg'} ]}
      />
      <TeamMember title="Relations"
      details={[ {name: "Dilip Patnana" , position:"Corporate Relations Head" ,  url:'./Assets/dilipP.jpeg'} , {name: "Apoorv Shrivastava" , position:"Public Relations Head" , url:'./Assets/apoorvS.jpg'} ]}
      />
      <TeamMember title="Design"
      details={[ {name: "Anushka Tiwari" , position:"Design Head" , url:'./Assets/anushkaT.jpg'} , {name: "Vineet Verma" , position:"Design Head" , url:'./Assets/vineetV.jpeg'} ]}
      />
     <TeamMember title="Outreach and Collaborations"
      details={[ {name: "Aryan Kumar" , position:"Outreach and Collaborations Head" , url:'./Assets/aryanK.jpg'} ]}
      />
       <TeamMember title="Hosting"
      details={[ {name: "Asmitha Beesu" , position:"Hosting Lead" , url:'./Assets/devShah.jpeg'} , {name: "Jyothika Bojja" , position: "Hosting Lead" , url:'./Assets/jyothikaB.jpg'} ]}
      /> 
    </div>
    </>
  )
}

export default Team

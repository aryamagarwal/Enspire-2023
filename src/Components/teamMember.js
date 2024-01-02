import React from 'react'
import './teamMember.css'

function TeamMember(props) {
  const details = props.details;
  return (
    <>

      <h1 id="tTitle" style={{ fontSize: "40px" , color: "orange" , textAlign: "center" , width: "98%" }}>{props.title}</h1>
      <div id="team">
     {
          details.map((val , key) =>
          (
            <div id="key" className="tMem">
              <img className="profphoto" src={require(''+val.url)} alt="Profile Photo" />
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

export default TeamMember

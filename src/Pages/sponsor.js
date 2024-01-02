import React from 'react'
import './sponsor.css'
function Sponsor() {
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
      const details1=[
        {
            name: 'Insyst Labs',
            url: './sponsorsImg/insyst.jpeg',
            link: 'https://insystlabs.com/'
        },

        {
            name: 'Lensfit',
            url: './sponsorsImg/lensfit.png',
            link: 'https://www.lensfit.com/'
        },
        {
            name: 'Blogadda',
            url: './sponsorsImg/blogadda.jpeg',
            link: 'https://www.blogadda.com/'
        },
        
      ]
      const details2=[
        
        {
            name: 'Bugsee',
            url: './sponsorsImg/bugsee.png',
            link: 'https://www.bugsee.com/'
        },
        {
            name: 'Ohcampus',
            url: './sponsorsImg/ohcampus.jpeg',
            link: 'https://ohcampus.com/'
        },
        {
            name: 'Cloudspoilt',
            url: './sponsorsImg/cloudsploit.jpeg',
            link: 'https://www.aquasec.com/products/cspm/'
        },
        {
            name: 'Wazirx',
            url: './sponsorsImg/wazirx.png',
            link: 'https://wazirx.com/'
        },
      ]

  return (
    <>
     <span style={styleHead}>OUR PAST </span><span style={styleHead2}>SPONSORS</span>
     <div className="sponsors">
      {
        details1.map((val)=>
        (
         <div>
          <a href={val.link}><img src={require(''+val.url)} alt={val.name} className="photo" /></a>
          <h4>{val.name}</h4>
          </div>
        ))
      }  
     </div>
     <div className="sponsors">
      {
        details2.map((val)=>
        (
         <div>
          <a href={val.link}><img src={require(''+val.url)} alt={val.name} className="photo" /></a>
          <h4>{val.name}</h4>
          </div>
        ))
      }  
     </div>
    </>
  )
}

export default Sponsor

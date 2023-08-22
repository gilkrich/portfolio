import React from 'react'
import './project.css'
import laptop from './IMAGES/laptop.png'

const Project = ({image,title,live,code,info}) => {
  return (
    <div className='Main-Project-Section'>
      <div style={{textAlign:'center',height:'200px'}}>
         <img src={laptop} alt="" width='340px'/>
         <img src={image} alt=""  className='project-image'/>
      </div>
         <h4 style={{margin:'8px'}} className='project-title'>{title}</h4>
         <p style={{margin:'8px',textAlign:'center'}} className='project-text'>{info}</p>

         <div className='buttons-forcode-cont'>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <button className='code-button'>Live Priview</button>
          </a>
          <a href={code} target="_blank" rel="noopener noreferrer">
            <button className='code-button'>code {'</>'}</button>
          </a>
         </div>
    </div>
  )
}

export default Project

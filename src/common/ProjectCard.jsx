import React from 'react'

function ProjectCard({src, link,title,description}) {
  return (
    <a href={link} 
            target="_blank">
                <img className= "hover"
                 src={src} 
                 alt="Image" />
                 <h3>{title}</h3>
                <p>{description} </p>
            </a> 
  )
}

export default ProjectCard
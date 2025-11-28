import React from 'react'

export default function ProjectCard({title, desc, img, demo, code}){
  return (
    <div className="card">
      <img src={img} className="project-image" alt={title} />
      <h3 style={{margin:'6px 0 8px 0'}}>{title}</h3>
      <p style={{color:'#475569', margin:'0 0 12px 0'}}>{desc}</p>
      <a className="btn" href={demo} target="_blank" rel="noreferrer">Live</a>
      <a style={{textDecoration:'none', color:'#0d6efd', fontWeight:600}} href={code} target="_blank" rel="noreferrer">Code</a>
    </div>
  )
}

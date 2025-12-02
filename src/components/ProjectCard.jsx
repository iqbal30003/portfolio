import React from 'react'

export default function ProjectCard({title, desc, img, demo, code}){
  return (
    <div className="card">
      <img src={img} className="project-image" alt={title} />
      <h3>{title}</h3>
      <p style={{color:'var(--muted)', marginBottom:12}}>{desc}</p>
      <a className="btn" href={demo} target="_blank">Live</a>
      <a href={code} target="_blank" style={{marginLeft:6, color:'var(--accent)', fontWeight:600}}>
        Code →
      </a>
    </div>
  )
}

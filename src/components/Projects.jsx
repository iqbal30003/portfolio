import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Smart Service Booking Platform',
    desc: 'Built with React, Node.js, MongoDB & Express. Demonstrates full-stack development, user authentication, service listings & booking system.',
    img: '/smart service booking home_page-0001.jpg',
    demo: 'https://smart-service-booking-platform.vercel.app/',
    code: 'https://github.com/iqbal30003/Smart-Service-Booking-Platform/tree/main'
  }
]

export default function Projects(){
  return (
    <section>
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}

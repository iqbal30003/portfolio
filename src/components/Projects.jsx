import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Employee Management System',
    desc: 'Laravel + React CRUD system with auth and departments.',
    img: '/project1.png',
    demo: '#',
    code: '#'
  },
  {
    title: 'Inventory System',
    desc: 'Stock management tool with categories and alerts.',
    img: '/project2.png',
    demo: '#',
    code: '#'
  },
  {
    title: 'Kuwait Salary Calculator',
    desc: 'Net salary + allowances + deduction calculator.',
    img: '/project3.png',
    demo: '#',
    code: '#'
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

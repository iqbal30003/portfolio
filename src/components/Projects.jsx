import React from 'react'
import ProjectCard from './ProjectCard'

const sampleProjects = [
  {
    title: 'Employee Management System',
    desc: 'Laravel + React full-stack CRUD app with auth and dashboard.',
    img: '/project1.png',
    demo: '#',
    code: '#'
  },
  {
    title: 'Inventory System',
    desc: 'Stock management with categories, stock alerts and reports.',
    img: '/project2.png',
    demo: '#',
    code: '#'
  },
  {
    title: 'Kuwait Salary Calculator',
    desc: 'Calculate net salary with local deductions and allowances.',
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
        {sampleProjects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}

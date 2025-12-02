import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DarkModeToggle from './components/DarkModeToggle'

export default function App() {
  return (
    <div>
      <Header>
        <DarkModeToggle />
      </Header>

      <main className="container">
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

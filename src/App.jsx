import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

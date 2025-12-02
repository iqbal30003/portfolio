import React from 'react'

export default function Header({ children }){
  return (
    <header className="header">
      <div className="container" style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <div>
          <div className="name">Mirza Iqbal</div>
          <div className="subtitle">
            Junior Full-Stack Developer — Laravel & React
          </div>
        </div>

        <div style={{display:'flex', gap:10, alignItems:'center'}}>
          {children}
          <a className="btn" href="/cv.pdf" download>Download CV</a>
        </div>
      </div>
    </header>
  )
}

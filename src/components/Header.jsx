import React from 'react'

export default function Header(){
  return (
    <header className="header">
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div>
          <div className="name">Mirza Iqbal</div>
          <div className="subtitle">Junior Full-Stack Developer — Laravel & React</div>
        </div>
        <div>
          <a className="btn" href="/cv.pdf" download>Download CV</a>
        </div>
      </div>
    </header>
  )
}

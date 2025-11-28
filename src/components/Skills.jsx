import React from 'react'

export default function Skills(){
  const skills = ['HTML','CSS','JavaScript','React','Laravel','MySQL','Git','REST APIs']
  return (
    <section>
      <h2 className="section-title">Skills</h2>
      <div className="card" style={{display:'flex', gap:10, flexWrap:'wrap'}}>
        {skills.map(s => <div key={s} style={{padding:'6px 10px', background:'#f1f5f9', borderRadius:6}}>{s}</div>)}
      </div>
    </section>
  )
}

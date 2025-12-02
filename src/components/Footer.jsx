import React from 'react'

export default function Footer(){
  return (
    <footer style={{textAlign:'center', padding:'20px 0', color:'var(--muted)'}}>
      © {new Date().getFullYear()} Mirza Iqbal
    </footer>
  )
}

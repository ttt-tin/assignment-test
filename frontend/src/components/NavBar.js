import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <section className="navbar">
      <div className="logo-container">
        <img src='logo.svg' alt="Logo" className="logo" />
      </div>
      <div className="avatar-container">
        <div className='author-text'>
            <p className='handicrafted'>Handicrafted by</p>
            <p className='author'>Jim HLS</p>
        </div>
        <div className="avatar">
          <img src='avatar.jpg' alt="Avatar" className="avatar-img" />
        </div>
      </div>
    </section>
  )
}

export default NavBar
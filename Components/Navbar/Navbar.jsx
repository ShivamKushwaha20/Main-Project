import React from 'react'
import "./navbar.css"
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <div className="navbar-container">
            <div className="site-logo">
                <img src="" alt="" />
                <h1>DataStructure</h1>
            </div>
            <nav className="navbar">
                <ul>
                    {/* 
                    We have used NavLink instead of using Holy Anchor tabgs
                        Anchor tag - refreshes whole page
                        link and NavLink - refreshes only the part of the page
                   
                    */}
                    <li> <NavLink to="/" className="Navbar-button">Home</NavLink> </li>
                    <li> <NavLink to="/about" className="Navbar-button">About</NavLink> </li>
                    <li> <NavLink to="/project" className="Navbar-button">Work</NavLink> </li>
                    <li> <NavLink to="/contact" className="Navbar-button">Contact</NavLink> </li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Navbar
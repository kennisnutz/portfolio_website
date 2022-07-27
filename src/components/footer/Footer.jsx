import React from 'react'
import './footer.css'
import { FaTwitterSquare } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#about" className="footer__logo">KONGLOMERATE</a>
      <ul className="permalinks">
        <li><a href="#me">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">EXexperience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Resources</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://twitter.com/kennchubby"><FaTwitterSquare /></a>
        <a href="https://www.linkedin.com/in/kennisnutz83"><FaLinkedin /></a>
        <a href="https://medium.com/@kennchubby83"><BsMedium /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Kennisnutz. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { ImBooks } from 'react-icons/im'
import { MdOutlineHomeRepairService } from 'react-icons/md'
import { MdContactPhone } from 'react-icons/md'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#contact" className={activeNav == '#' ? 'active' : ''} onClick={() => setActiveNav('#')} ><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><ImBooks /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineHomeRepairService /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone /></a>
    </nav>
  )
}

export default Nav
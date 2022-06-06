import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='head__socials'>
        <a href="https://www.linkedin.com/in/kennisnutz83/" target="_blank"><BsLinkedin/></a>
        <a href="https://twitter.com/kennchubby" target="_blank"><FaTwitterSquare/></a>
        <a href="https://medium.com/@kennchubby83" target="_blank"><BsMedium/></a>
    </div>
  )
}

export default HeaderSocials
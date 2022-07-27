import React from 'react'
import './header.css'
import Cta from './Cta'
import me from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1> Kenneth Anyanwu</h1>

        <h5 className='text-light'>Web3 Project developer</h5>
        <Cta />
        <div className="me" id='me'>
          <img src={me} alt="me" />
        </div>
        <HeaderSocials />
        <a href="#contact" className="scroll__down">scroll down</a>
      </div>

    </header>
  )
}

export default Header
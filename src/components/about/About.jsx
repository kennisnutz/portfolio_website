import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className='about__icon'/>
              <h5>Eperience</h5>
              <small>1+ years working experience</small>              
            </article>
            <article className="about__card">
            <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>over 10 satisfied clients</small>              
            </article>
            <article className="about__card">
            <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>12 projects completed</small>              
            </article>
          </div>
          <p>
            I am  passionate self motivatate individual with a solution oriented 
            mentality enhanced by strong academic background
            in civil engineering and project management. I am also a self taught web3 
            application programmer with intermediate skills
            solidity, java script and python programing languages. A speak 
            fluent English and Igbo.
          </p>
          <a href="#contact" className='btn btn-primary'> Talk to me</a>
        </div>
      </div>
    </section>
  )
}

export default About
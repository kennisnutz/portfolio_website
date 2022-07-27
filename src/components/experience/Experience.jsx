import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience' className="">
      <h5>Here are some of</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Administrative Skills</h3>
          <div className="experience__content">
            <article className='experiece__details'>
              <BsPatchCheckFill className='experiece__details-icon' />
              <div>
                <h4>Project Management</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experiece__details'>
              <BsPatchCheckFill className='experiece__details-icon' />
              <div>
                <h4>Workfolow Automation</h4>
                <small className='text-light'>Intermediat</small>
              </div>

            </article>
            <article className='experiece__details'>
              <BsPatchCheckFill className='experiece__details-icon' />
              <div>
                <h4>Requirements Gathering</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experiece__details'>
              <BsPatchCheckFill className='experiece__details-icon' />
              <div>
                <h4>Technical Reporting</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experiece__details'>
              <BsPatchCheckFill className='experiece__details-icon' />
              <div>
                <h4>Specification development</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experiece__details'>
              <BsPatchCheckFill className='experiece__details-icon' />
              <div>
                <h4>Version management</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>

        </div>
        <div className="experience__backend">
          <h3>ICT Skills</h3>
          <div className="experience__content">
            <article className='experiece__details'>
              <BsPatchCheckFill className='experiece__details-icon' />
              <div>
                <h4>Solidity</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experiece__details'>
              <BsPatchCheckFill className='experiece__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experiece__details'>
              <BsPatchCheckFill className='experiece__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experiece__details'>
              <BsPatchCheckFill className='experiece__details-icon' />
              <div>
                <h4>NodeJs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experiece__details'>
              <BsPatchCheckFill className='experiece__details-icon' />
              <div>
                <h4>React js</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experiece__details'>
              <BsPatchCheckFill className='experiece__details-icon' />
              <div>
                <h4>Web3.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
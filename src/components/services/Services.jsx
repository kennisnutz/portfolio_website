import React from 'react'
import './services.css'
import {BsShieldFillCheck} from 'react-icons/bs'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I can do for you</h5>
      <h2>My Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Smart Contracts</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Erc20 standard token smart contracts  for fungible share tokens</p>
            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Erc721 standard  smart contracts  for digital "deeds" or none fungible  tokens (NFT)</p>
            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>payment, vesting and distribution smart contracts for teams and reward systems</p>
            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>custom smart contracts for unique concepts and projects</p>
            </li>
          </ul>
        </article>
        {/* END OF SMART CONTRACTS SECTION */}
        <article className='service'>
          <div className="service__head">
            <h3>Decentralized applications Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Requirements gathering for software specification requirements</p>
            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Component engineering and development</p>
            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Unit and integration testing</p>
            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Version control</p>
            </li>
          </ul>
        </article>
         {/* END OF DECENTRALIZED APPLICATION DEVELOPMENT SECTION */}
         <article className='service'>
          <div className="service__head">
            <h3>Content Administration</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Copy writing</p>
            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Free lance content</p>
            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Illustrative content creation</p>
            </li>
            <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Product branding and documentation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
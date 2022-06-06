import React from 'react'
import Cv from '../../assets/cv.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a href={Cv} download className='btn'> Downlod cv</a>
        <a href="#contact" className='btn btn-primary'>Contact me </a>
    </div>
  )
}

export default Cta
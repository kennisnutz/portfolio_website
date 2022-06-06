import React from 'react'
import "./testimonials.css"
import data from './data'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Free learning resources for</h5>
      <h2>Web3 Beginers</h2>
      <Swiper
      modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}                
      pagination={{ clickable: true }}  
      className="container testimonials__container">
        {
          data.map(({image, name, review, link}, index)=>{
            return (
              
                <SwiperSlide 
                              
                
                
                className='testimonial'>
                <a href={link} target="_blank">
                  <div className="client__avatar">
                    <img src={image} alt=" AVATAR One" />           
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
                </a>
              </SwiperSlide> 
              
            )
          })
        }    
      </Swiper>
    </section>
  )
}

export default Testimonials
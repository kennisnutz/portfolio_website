import React from 'react'
import './portfolio.css'
import Portfolio1 from '../../assets/portfolio1.jpg'
import Portfolio2 from '../../assets/portfolio2.jpg'
import Portfolio3 from '../../assets/portfolio3.png'
import data from './static'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Veiw my Projects</h5>
      <h2>My Portfolio</h2>
      <div className="container portfolio__container">
      {
          data.map(({id, image, title, github, demo})=>{
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image"> 
                  <img src={image} alt={title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>GitHub</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>                
                  </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import {HiOutlineMail} from  'react-icons/hi'
import {ImWhatsapp} from 'react-icons/im'
import {FaTelegramPlane} from 'react-icons/fa'



const Contact = () => {
  const form = useRef()

  const sendEmail= (e)=>{
    e.preventDefault();

    emailjs.sendForm("service_qeqyqt8", "template_j7wofs8", form.current, "xa9myUh-UMFl2gDzp")
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kennchubby83@gmail.com</h5>
            <a href="mailto:kennchubby83@gmail.com" target='_blank'>Send me an Email</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>           
            <a href="https://api.whatsapp.com/send?phone+2349069674399" target='_blank'>Send me an sms on Whatsapp</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@kennisnutz</h5>
            <a href="https://t.me/Kennisnutz" target='_blank'>Send me an chat on tellegram</a>
          </article>        
        </div>
        {/**CONTACT SECTION END */}
        <form ref={form} onSubmit={sendEmail}> 
          <input type="text" name='name' placeholder='Enter Your Full Name' required />
          <input type="email" name='email' placeholder='Enter Your email address' required />
          <textarea name="message" id="" placeholder="Your message" rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
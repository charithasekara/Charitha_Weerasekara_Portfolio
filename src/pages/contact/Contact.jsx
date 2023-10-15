import React from 'react';
import{FaEnvelopeOpen} from 'react-icons/fa';
import{FaPhoneSquareAlt} from 'react-icons/fa';
import{FaFacebookF} from 'react-icons/fa';
import{FaTwitter} from 'react-icons/fa';
import{FaYoutube} from 'react-icons/fa';
import{ImDribbble} from 'react-icons/im';
import{PiFigmaLogoThin} from 'react-icons/pi';
import {FaGithub} from 'react-icons/fa';
import {TbBrandFiverr} from 'react-icons/tb';

import{FiSend} from 'react-icons/fi';
import'./contact.css';

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new projects, Creative ideas or opportunities to be part of your visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="contact__icon"/>
            <div>
            <span className="info__title">Mail me</span>
            <h4 className="info__desc">charithmadhushansekara@gmail.com</h4>
          </div>
          </div>

          <div className="info__item">
              <FaPhoneSquareAlt className="contact__icon"/>
            <div>
            <span className="info__title">Call me</span>
            <h4 className="info__desc">+94702516984</h4>
          </div>
          </div>

          <div className="contact__socials">

            <a href="https://www.fiverr.com/charithsekara" className="contact__social-link">
              <TbBrandFiverr/>
            </a>

            <a href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1102977810588365682" className="contact__social-link">
              <PiFigmaLogoThin/>
            </a>

            <a href="https://github.com/charithasekara" className="contact__social-link">
              <FaGithub/>
            </a>

            <a href="https://dribble.com/CharithaSekra" className="contact__social-link">
              <ImDribbble/>
            </a>

          </div>

          
        </div>
      </div>

      <form action="" className="contact__form">

        <div className="form__input-group">
          <div className="form__input-div">
            <input 
            type="text" 
            placeholder='Your Name'
            className="form__control"/>
          </div>

          <div className="form__input-div">
            <input 
            type="email" 
            placeholder='Your Email'
             className="form__control" />
          </div>

          <div className="form__input-div">
            <input 
            type="text" 
            placeholder='Your Subject'
             className="form__control" />
          </div>

        </div>

        <div className="form__input-div">
          <textarea placeholder='Your Message' className="form__control textarea"></textarea>
        </div>

        <button className="button">
          Send Message
          <span className="button__icon contact__button-icon">
            <FiSend/>
          </span>
        </button>
      </form>
    </div>
    </section>
  )
}

export default Contact

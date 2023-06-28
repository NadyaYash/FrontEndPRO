import React from 'react'
import footer from '../../dataImages/image 11.png'
import s from './index.module.css'
import whatsapp from '../../dataImages/whatsapp.png'
import insta from '../../dataImages/insta.png'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.contact}>
        <p className={s.contact_word}>Contact</p>
        <p className={s.phone}>+49 999 999 99 99</p>

        <div className={s.social}>

          <figure>
            <img src={insta} alt='insta' width='44' height='44' />
            <figcaption>Instagram</figcaption>
          </figure>
          <figure>
            <img src={whatsapp} alt='whatsapp' width='44' height='44' />
            <figcaption>WhatsApp</figcaption>
          </figure>
        </div>
      </div>

      <div className={s.address_div}>
        <p className={s.address_style}>Address</p>
        <a className={s.address_full} href='https://www.google.com/search?q=telranDE'>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
        <div>
          <p className={s.time}>Working hours:</p>
          <p className={s.day_time}> 24 hours a day</p>
        </div>
      </div>
      <img className={s.img} src={footer} alt='map' />

    </footer>

  )
}

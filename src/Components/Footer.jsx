import React from 'react'
import '../Styles/Footer.css'
import fb from '../Assets/Icons/fa-brands_facebook-square.svg'
import insta from '../Assets/Icons/fa-brands_instagram.svg'
import twitter from '../Assets/Icons/fa-brands_twitter.svg'
import youtube from '../Assets/Icons/fa-brands_youtube.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div id="social_icons">
            <img src={fb} alt="Facebook" />
            <img src={insta} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
            <img src={youtube} alt="Youtube" />
        </div>
        <div id="sitemap">
            <a href="https://">Conditions of Use</a>
            <a href="https://">Privacy & Policy</a>
            <a href="https://">Press Room</a>
        </div>
        <div id="copyright">
            <p>© 2023 MovieBox by Femi.dev  </p>
        </div>
        
    </div>
  )
}

export default Footer
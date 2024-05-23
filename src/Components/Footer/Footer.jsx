import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instaicon.png'
import whatsapp_icon from '../Assets/whatsappicon.png'
import twitter_icon from '../Assets/twittericon.png'
import github_icon from '../Assets/githubicon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt="" />
            <div className='footer-logo-name'>
                <p>NAMAHA</p>

            </div>
        </div>
        <ul className="footer-links">
            <li>About us</li>
            <li>Our Services</li>
            <li>Office</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={twitter_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={github_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright@2024 - All rights reserved</p>
        </div>
      
    </div>
  )
}

export default Footer

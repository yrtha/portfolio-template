import React from 'react'
import './Contact.css'
import Seperator from './Seperator'
import SocialContact from './SocialContact'


function Contact() {
    return (
        <div className="contact">
        <Seperator />
        <label className="section-title">Contact</label>
        <div className="contact-container">
            <div className="contact-left">
              <p>Want to get in touch? Contact ,e in any of the platform.</p>
              <SocialContact /> 
            </div>

            <div className="download">
            <a download href="./Resume.docx">
            <i class="fi-rr-cloud-download download-icon"></i>
            Download Resume
            </a>
            
            </div>
                
        </div> 
        </div>
    )
}

export default Contact

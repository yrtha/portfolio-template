import React from 'react'
import './About.css'
import img from './assets/coding.png'
import SocialContact from './SocialContact'

function About() {
    return (
        <div className="about">

            <div className="about-top">

                <div className="about-left">
                Hello There 👋, I am
                <br/> <span className="info-name">Yathartha</span>
                <br/> I love experimenting with the web.
                </div>

                <div className="about-right">
                <img 
                    src={img}
                    alt=''
                    // src={require("images/coding.png").default} 
                    className='picture' 
                />
                </div>

            </div>

            <div className="about-bottom">
            <SocialContact />
            </div>
            
        </div>
    )
}

export default About

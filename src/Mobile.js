import React from 'react'
import './Mobile.css'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            
            <div className="close-icon" onClick={()=> setIsOpen(!isOpen)}>
            <i class="fi-rr-cross-circle"></i>
            </div>

            <div className="mobile-options">

            <div className="mobile-option">
            <a href='#project'>
            <i class="fi-rr-edit-alt option-icon">Projects</i>
            </a>
            </div>

            <div className="mobile-option">
            <a href='#skills'>
            <i class="fi-rr-laptop option-icon">Skills</i>
            </a>
            </div>

            <div className="mobile-option">
            <a href='#work'>
            <i class="fi-rr-briefcase option-icon">Work</i>
            </a>
            </div>

            <div className="mobile-option">
            <a href='#contact'>
            <i class="fi-rr-user option-icon">Contact</i>
            </a>
            </div>


            </div>

        </div>
    )
}

export default Mobile

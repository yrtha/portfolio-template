import React from 'react'
import './Web.css'

function Web() {
    return (
        <div className="web">
            
            <div className="web-options">
            <a href='#project'>
            <i class="fi-rr-edit-alt option-icon">Projects</i>
            </a>
            </div>

            <div className="web-options">
            <a href='#skills'>
            <i class="fi-rr-laptop option-icon">Skills</i>
            </a>
            </div>

            <div className="web-options">
            <a href='#work'>
            <i class="fi-rr-briefcase option-icon">Work</i>
            </a>
            </div>

            <div className="web-options">
            <a href='#contact'>
            <i class="fi-rr-user option-icon">Contact</i>
            </a>
            </div>

        </div>
    )
}

export default Web

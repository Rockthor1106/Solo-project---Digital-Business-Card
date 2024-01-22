import React from "react";
import Mail from "../images/mail-logo.png"
import Linkedin from "../images/linkedin-logo.png"

function Main() {
    return (
        <div>
            <h2 className="name">Laura Smith</h2>
            <h4 className="profession">Frontend Developer</h4>
            <h5 className="email">laurasmith.website</h5>
            <div className="socialnet-buttons">
                <button className="btn">
                    <img className="contact-logo" src={Mail} alt="" />
                    Email
                </button>
                <button className="btn" id="linkedin-btn">
                    <img className="contact-logo" src={Linkedin} alt=""/>
                    LinkedIn
                </button>
            </div>
            <div className="main-content">
                <h3 className="title">About</h3>
                <p className="content">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3 className="title">Interest</h3>       
                <p className="content">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>     
            </div>
        </div>
    )
}

export default Main;
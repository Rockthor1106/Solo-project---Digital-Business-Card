import React from "react";
import Twitter from "../images/twitter-logo.png"
import Facebook from "../images/facebook-logo.png"
import Instagram from "../images/instagram-logo.png"
import Github from "../images/github-logo.png"

function Footer() {
    return (
        <footer className="footer-container">
            <img className="twitter logo" src={Twitter} alt="twitter logo" />
            <img className="logo" src={Facebook} alt="facebook logo" />
            <img className="logo" src={Instagram} alt="instagram logo" />
            <img className="github logo" src={Github} alt="github logo" />
        </footer>
    )
}

export default Footer;
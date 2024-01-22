import React from "react"
import ProfilePhoto from "../images/profile-photo.png"

function Header() {
    return(
        <header className="header-container">
            <img className="photo" src={ProfilePhoto} alt="profile photo"/>
        </header>
    )
}

export default Header;
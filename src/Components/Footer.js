import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-content">
                    <h3>Help Center | Terms and Conditions | FAQ | Privacy Policy</h3>
                    <ul className="socials">
                        <li><a href="#"><FaFacebook/></a></li>
                        <li><a href="#"><FaInstagram/></a></li>
                        <li><a href="#"><FaYoutube/></a></li>
                        <li><a href="#"><FaTwitter/></a></li>
                        <li><a href="#"><FaLinkedin/></a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>Let's GTok private limited, designed by <span>trip0le</span></p>
                </div>
            </footer>
        </div>
    )
}

export default Footer

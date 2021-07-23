import React from 'react'

function Contact() {
    return (
        <div className="Contact">
            <div className="contact-form">
                <h1>Contact Us</h1>
                <div className="txtb">
                    <label>Full Name :</label>
                    <input type="text" name="" value="" placeholder="Enter Your Name"></input>
                </div>
                <div className="txtb">
                    <label>Email id :</label>
                    <input type="text" name="" value="" placeholder="Enter Your Email id"></input>
                </div>
                <div className="txtb">
                    <label>Message :</label>
                    <textarea></textarea>
                </div>
                <a className="btn">Send</a>
            </div>
        </div>
    )
}

export default Contact

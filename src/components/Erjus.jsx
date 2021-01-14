import React from 'react';
import { FaLinkedin, FaPinterest, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'




const Erjus = () => {

    const [contact] = React.useState(
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        })
    return (
        <div className="erjus" id="erjus">
            <div  data-aos="fade-up-down" className="container">

                <div>
                    <div className="main-header-contact">
                        <h2>erjus<div style={{ display: 'inline-flex', color: 'red' }}>.</div>st</h2>
                    </div>
                    <div className="common">
                        <p style={{ fontSize: '15px' }} className="main-content">{contact.text}  </p>
                    </div>
                </div>
                <div className="header-section">
                    <ul className="header-ul-contact"  >
                        <li><a href="linkedin.com"><FaLinkedin /> </a></li>
                        <li><a href="pinterest.com"><FaPinterest /></a></li>
                        <li><a href="twitter.com"><FaTwitter /></a></li>
                        <li><a href="github.com/"><FaGithub /></a></li>
                        <li><a href="instagram.com"><FaInstagram /></a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Erjus

import React from 'react'
import { FaLinkedin, FaPinterest, FaGithub, FaInstagram, FaTwitter, FaPlay } from 'react-icons/fa'
import { Link } from "react-router-dom";


const Home = () => {

    const [state] = React.useState({ title: "I'm Erjus Stafa", text: 'I am a junior web developer without experience in this field' })

    return (


        <header className="header" id="home">
            <div className="container">
                <div className="row">
                    <div className="header-content">
                        <div className="header-section">
                            <ul className="header-ul">
                                <div className="row">
                                    <li ><Link  to="/www.linkedin.com" className="home-link"><FaLinkedin /> </Link></li>
                                    <li><Link to="/www.pinterest.com" className="home-link"><FaPinterest /></Link></li>
                                    <li><Link to="/www.twitter.com" className="home-link"><FaTwitter /></Link></li>
                                    <li><Link to="/www.github.com/" className="home-link"><FaGithub /></Link></li>
                                    <li><Link to="/www.instagram.com" className="home-link"><FaInstagram /></Link></li>
                                </div>

                            </ul>
                            <p style={{ fontWeight: 'bold' }}>{state.title}</p>
                            <p className="text-home">{state.text}</p>
                            <div className="header-button">
                                <Link to="/" className="btn btn-outline">My Portofolio</Link> &nbsp;&nbsp;&nbsp;
                                <Link to="/" className="btn btn-smart"><FaPlay className="play" /></Link> &nbsp;&nbsp;&nbsp;
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>

    )
}

export default Home

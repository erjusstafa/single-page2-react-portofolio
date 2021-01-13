import React from 'react';
import { FaBars , FaTimes} from 'react-icons/fa'
import {HashLink as Link } from "react-router-hash-link";

  
const Nav = () => {

    const [click, setClick] = React.useState(false);
    const [button, setButton] = React.useState(true);

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }}

        window.addEventListener('resize' , showButton);

    return (
            

        <nav className="navbar">
            <div className="container">
                <div className="navbar-container">
                    <ul className="navabar-left">
                        <div className="navbar-left-text">
                            <h2>erjus<div style={{ color: 'red' }}>.</div>st</h2>
                        </div>
                    </ul>
                    <div >

                    <div className="menu-icon" onClick={handleClick}>
                            {
                                click ? <FaTimes className="fa-times" /> : <FaBars className="fa-bars" />
                            }
                        </div>

                        <ul  className={click ? 'navbar-right active' : 'navbar-right' }>
                            <li className="nav-item"><Link to="#" className="nav-links"  onClick={closeMobileMenu}>Home</Link></li>
                            <li className="nav-item"><Link to="#services" className="nav-links"  onClick={closeMobileMenu}>Service</Link></li>
                            <li className="nav-item"><Link to="#about"  className="nav-links" onClick={closeMobileMenu}>About</Link></li>
                            <li className="nav-item"><Link to="#skills" className="nav-links" onClick={closeMobileMenu} >Skills</Link></li>
                            <li className="nav-item"><Link to="#portofolio" className="nav-links"  onClick={closeMobileMenu}>Portofolio</Link></li>
                            <li className="nav-item"><Link to="#blog" className="nav-links"  onClick={closeMobileMenu}>Blog</Link></li>
                            <li className="nav-item"><Link to="#contact" className="nav-links"  onClick={closeMobileMenu}>Contact</Link></li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav

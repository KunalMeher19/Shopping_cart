import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/navbar.css'
import logoImage from './image/logo.png'

const Navbar = ({ size, setShow }) => {
    return (
        <header>
            <div id='header'>
                <span className='header-logo'>
                    <a href='/'><img src={logoImage} alt='Logo' /></a>
                </span>
                <div className='header-list'>
                    <nav className="header-list-nav">
                        <ul>
                            <li><a href="#" className="active">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </nav>
                    <div className='header-list-icon'>
                        <a href='#'><i className="fas fa-cart-plus" onClick={()=>setShow(false)} ></i><span>{size}</span></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
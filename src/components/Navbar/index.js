import React from 'react'
import logo from '../../assets/LucitLogo.png';
import './styles.css'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo">
                <img src={logo} alt='Logo' />
            </div>
        </div>
    );
}

export default Navbar;
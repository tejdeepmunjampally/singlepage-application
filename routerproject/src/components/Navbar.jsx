import React from "react";
import { Link } from  "react-router-dom";
import './Navbar.css'

function Navbar() {
    return(
        <div className="navbar">    
            <h2>MT SOLUTIONS</h2>
            <img src="https://png.pngtree.com/png-vector/20240810/ourmid/pngtree-mountain-logo-on-transparent-background-png-image_13424284.png" alt="Logo" className="logo"/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}
export default Navbar;
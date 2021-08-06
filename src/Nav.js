import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
    const  [show, handleShow] = useState(false);
    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if (window.scrollY >100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListner("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
           <img
           className="nav_logo"
           src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" 
           alt="Netflix Logo"
           /> 
           <img
           className="nav-avatar"
           src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
           alt="Avatar Logo"
           />
        </div>
    )
}

export default Nav;

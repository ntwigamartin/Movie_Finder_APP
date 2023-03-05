import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar(){
    return(
        <nav>
            <h3>Movie Finder</h3>
            <Link to="/" >Logout</Link>
        </nav>
    )
}

export default Navbar;
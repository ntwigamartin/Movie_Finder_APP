import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar(){
    return(
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/getmovies" >All Movies</Link>
            <Link to="/addmovie" >Add Movie</Link>
        </nav>
    )
}

export default Navbar;
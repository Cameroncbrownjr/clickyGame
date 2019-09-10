import React from "react";
import "./style.css";


function Navbar(props) {
    return (

        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Cartoon Shuffle</span>
            <span className="navbar-brand mb-0 h1">Click an Image to Begin</span>
            <span className="navbar-brand mb-0 h1">score : {props.score} </span>
        </nav>
    );
}


export default Navbar;

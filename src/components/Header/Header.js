import React from "react";
import "./Header.css";

const Header = props => 
   (<nav className="nav nav-fill headerStyle">
        <a className="nav-item">Clicky Game</a> 
        {/* {{add in href later for link} <a class="nav-link active" href="#">Active</a>} */}
        <a className="nav-item">Click an image to begin!</a>
        <a className="nav-item">Score: 0 | Top Score: 0</a>
    </nav>);

export default Header;

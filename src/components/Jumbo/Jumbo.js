import React from "react";
import "./Jumbo.css";

const Jumbo = props => 
(<div className="jumbotron jumbotron-fluid jumboStyle">
    <div className="container">
        <h1 className="display-4">Animal Clicky Game</h1>
         <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
    </div>
</div>)

export default Jumbo;

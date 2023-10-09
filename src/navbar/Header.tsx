import React from "react";
import "../css/header.css";

import { NavLink } from 'react-router-dom';
import image from "../images/logo1.png";

export default function Header() {
    const isLightBackground = true; // Replace with your logic

  
  return (
    <div className={`header ${isLightBackground ? 'dark-bg' : 'light-bg'}`}>
      <div className="header-container">

        <div className="logo">
          <img src={image} alt="" />
        </div>

        <div className="nav">
            <NavLink to="/" className={"header-link"}>Home</NavLink>
            <NavLink to="/informations" className={"header-link"}>Info</NavLink>
            <NavLink to="/newslatter" className={"header-link"}>Newsletter</NavLink>
            <NavLink to="/cooking" className={"header-link"}>Cooking</NavLink>
            <NavLink to="/contact" className={"header-link"}>Contact</NavLink>
        </div>

      </div>
    </div>
  );
}

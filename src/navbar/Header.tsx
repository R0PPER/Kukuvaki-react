import React from "react";
import "../css/header.css";

import { NavLink } from "react-router-dom";
import image from "../images/logo1.png";
import { useState, useEffect } from "react";

export default function Header() {
  const [isNavbar, setNavBar] = useState(true);

  const [menuBarClasses, setMenuBarClasses] = useState("");
  const [navClasses, setNavClasses] = useState("");
  const [menuBgClasses, setMenuBgClasses] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setNavBar(false);
      } else {
        setNavBar(true);
      }
    });
  }, []);

  const menuOnClick = () => {
    setMenuBarClasses((prev) => (prev === "change" ? "" : "change"));
    setNavClasses((prev) => (prev === "change" ? "" : "change"));
    setMenuBgClasses((prev) => (prev === "change-bg" ? "" : "change-bg"));
  };

  return (
    <div className={`header`}>
      <div className="header-container">

        <div className="logo">
          <NavLink to="/">
            <img src={image} alt="" />
          </NavLink>
        </div>

        <div className="nav" style={{ display: isNavbar ? "flex" : "none" }}>
          <div>
            <NavLink
              to="/"
              className={
                "header-link"
                // + ` ${headerColor}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/informations"
              className={
                "header-link"
                // + ` ${headerColor}`
              }
            >
              Info
            </NavLink>
            <NavLink
              to="/newslatter"
              className={
                "header-link"
                //  + ` ${headerColor}`
              }
            >
              Newsletter
            </NavLink>
            <NavLink
              to="/cooking"
              className={
                "header-link"
                // + ` ${headerColor}`
              }
            >
              Cooking
            </NavLink>
            <NavLink
              to="/contact"
              className={
                "header-link"
                // + ` ${headerColor}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div id="menu" style={{ display: !isNavbar ? "flex" : "none" }}>
          <div id="menu-bar" onClick={menuOnClick} className={menuBarClasses}>
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
          </div>

          <nav className={`nav ${navClasses}`} id="nav">
            <ul>
              <li>
                <NavLink to="/" className={"burger-link"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/informations" className={"burger-link"}>
                  Info
                </NavLink>
              </li>
              <li>
                <NavLink to="/newslatter" className={"burger-link"}>
                  Newsletter
                </NavLink>
              </li>
              <li>
                <NavLink to="/cooking" className={"burger-link"}>
                  Cooking
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className={`menu-bg ${menuBgClasses}`} id="menu-bg"></div>
        </div>
      </div>
    </div>
  );
}

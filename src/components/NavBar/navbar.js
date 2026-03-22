import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <div className="desktopMenu">
        <Link to="home" smooth={true} duration={500} offset={-80} className="desktopMenuItem">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} offset={-80}className="desktopMenuItem">
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} className="desktopMenuItem">
          Projects
        </Link>
      </div>

      <button className="desktopMenuButton">
        <img src="" alt="" className="desktopMenuImg" />
        Contact me
      </button>
    </nav>
  );
};

export default NavBar;
import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
const NavBar = () => {
  return (
    
    // <div className="container">
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link className="desktopMenuItem" >Home</Link>
                <Link className="desktopMenuItem" >About</Link>
                <Link className="desktopMenuItem" >Projects</Link>
            
            </div>
            <button className="desktopMenuButton">
                <img src="" alt="" className="desktopMenuImg"  />Contact me</button>

        </nav>
    // </div>  
  )
}
export default NavBar;

import React, { useState, useEffect } from "react";
import "./Header.css"

const Header = () => {

     const [scrolled, setScrolled] = useState(false);

     // Function to handle scroll event
     const handleScroll = () => {
       if (window.scrollY > 100) {
         setScrolled(true);
       } else {
         setScrolled(false);
       }
     };

     // Add scroll event listener on component mount
     useEffect(() => {
       window.addEventListener("scroll", handleScroll);
       return () => {
         window.removeEventListener("scroll", handleScroll);
       };
     }, []);

     // Inline style for header background color
     const headerStyle = {
       backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)",
       transition: "background-color 0.3s ease",
     };
  return (
    <div>
      <header
        style={headerStyle}
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            className="logo d-flex align-items-center me-auto me-lg-0"
          >
            <img src="assets/img/elia2.png" alt="" />
            <span />
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                  <br />
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          <a className="btn-getstarted" href="index.html#about">
            Get Started
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;

import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import "../frontend components/navbar.css";
import Img from "../Assets/HAM_LOGO-removebg-preview.png";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const indicatorBar = document.querySelector(".scroll-indicator-bar");

      const pageScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollValue = (pageScroll / height) * 100;

      indicatorBar.style.width = scrollValue + "%";
    });

    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
      navigation.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.reload(false);
  };
  return (
    <>
      <div className="header">
        <div class="nav-bar ">
          <Link to="/">
            {" "}
            <img src={Img} className="logo" alt="" />
          </Link>
          <div class="navigation ">
            <div class="nav-items justify-content-center">
              <i class="uil uil-times nav-close-btn"></i>
              <Nav>
                <Nav.Link>
                  <Link to="/events">Events</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/gallery">Gallery</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About Us</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/team">Team</Link>
                </Nav.Link>
                {!isLoggedIn && (
                  <Nav.Link>
                    <Link to="/login">Login/SignUp</Link>
                  </Nav.Link>
                )}
                {isLoggedIn && (
                  <Nav.Link>
                    <Link onClick={logoutHandler}>Logout</Link>
                  </Nav.Link>
                )}
              </Nav>
            </div>
          </div>
          <i class="uil uil-apps nav-menu-btn"></i>
        </div>
        <div class="scroll-indicator-container">
          <div class="scroll-indicator-bar"></div>
        </div>
      </div>
    </>
  );
}
export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaClock } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <section className="top-content">
        <div className="flex-top-icons">
          <div className="flex-icon">
            <div>
              <FaRocket style={{ color: "white", fontSize: "30px" }} />
            </div>
            <div>
              <div>24 HRS</div>
              <div>014288641</div>
            </div>
          </div>
          <div className="flex-icon">
            <div>
              <FaRocket style={{ color: "white", fontSize: "30px" }} />
            </div>
            <div>
              <div>24 HRS</div>
              <div>014288641</div>
            </div>
          </div>
          <div className="flex-icon">
            <div>
              <FaClock style={{ color: "white", fontSize: "30px" }} />
            </div>
            <div>
              <div>24 HRS</div>
              <div>014288641</div>
            </div>
          </div>
        </div>
      </section>
      <header>
        <div className="pic-logo"></div>
        <ul>
          <li>
            <Link className="atag" style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="atag"
              style={{ textDecoration: "none" }}
              to="contact/"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="atag"
              style={{ textDecoration: "none" }}
              to="gallery/"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className="atag"
              style={{ textDecoration: "none" }}
              to="services/"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="atag"
              style={{ textDecoration: "none" }}
              to="aboutus/"
            >
              About us
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;

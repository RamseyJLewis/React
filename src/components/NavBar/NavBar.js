import Logo from "../Logo/Logo";
import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faWindowClose,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// import React, { useLayoutEffect, useState } from 'react';
import Fade from "react-reveal/Fade";
import { Wave } from "react-animated-text";

function NavBar() {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  const mobileNav = () => setClick(!click);
  return (
    <>
      <div className="NavBar">
         <div className="hamburgerMenue">
        <FontAwesomeIcon className="Bars" icon={faBars} onClick={mobileNav} />
      </div>
      <div className="Resume">
             <a
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="ResumeNavMobile"
                style={{}}
                href={
                  "https://docs.google.com/document/d/e/2PACX-1vQ9E0qSxZ7EOVq4O_pop_LBhdkP-E7Ozrw1jmKMooVABYZlS9lvr6ErqnBeNgK_O-TsCkZsMdAncOMR/pub"
                }
                target="blank"
              >
                <p className="navlink">Resume </p>
                {
                  <FontAwesomeIcon className="resumeIcon" icon={faEnvelopeOpen}>
             
                    Resume
           
                  </FontAwesomeIcon>
                }
              </a> 
        
            </div>
      </div>

      
      {click ? (
        <div className="navBarPullOut">
                   <div className="navXOut">
        <FontAwesomeIcon className="Bars" icon={faWindowClose} onClick={mobileNav} />

      </div>
          <div className="NavBarText">
            <Link
              className="navlink"
              to="Home"
              smooth={true}
              onClick={mobileNav}
            >
              <span>&lt;</span>
              Home
              <span>/&gt;</span>
            </Link>
            <Link
              className="navlink"
              to="About"
              smooth={true}
              onClick={mobileNav}
            >
              <span>&lt;</span>
              Start
              <span>/&gt;</span>
            </Link>
            <Link
              className="navlink"
              to="Portfolio"
              smooth={true}
              onClick={mobileNav}
            >
              <span>&lt;</span>
              Work
              <span>/&gt;</span>
            </Link>
            <Link
              className="navlink"
              to="LifeExperience"
              smooth={true}
              onClick={mobileNav}
            >
              <span>&lt;</span>
              Life
              <span>/&gt;</span>
            </Link>
            <Link
              className="navlink"
              to="Contact"
              smooth={true}
              onClick={mobileNav}
            >
              <span>&lt;</span>
              Contact
              <span>/&gt;</span>
            </Link>
     

   
          </div>
          <div className="logo">
          <Fade bottom>
            <div className="gitubLogo">
              <a
                className="logo"
                href="https://github.com/RamseyJLewis"
                target="blank"
              >
                {<FontAwesomeIcon icon={faGithub} />}
              </a>
            </div>
          </Fade>
          <Fade top>
            <div className="gitubLogo">
              <a
                className="logo"
                href="https://www.linkedin.com/in/ramsey-lewis/"
                target="blank"
              >
                {<FontAwesomeIcon icon={faLinkedin} />}
              </a>
            </div>
          </Fade>
          <Fade bottom>
            <div className="gitubLogo">
              <a
                className="logo"
                href="https://www.instagram.com/ramseyjlewis/"
                target="blank"
              >
                {<FontAwesomeIcon icon={faInstagram} />}
              </a>
            </div>
          </Fade>
        </div>
        </div>
      ) : (
        <div> </div>
      )}
    </>
  );
}
export default NavBar;

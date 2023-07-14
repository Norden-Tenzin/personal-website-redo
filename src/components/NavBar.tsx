import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function NavBar({
  projectHeight,
}: {
  projectHeight: (styleClass: string) => void;
}) {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      if (windowHeight > window.innerHeight - 64) {
        setStickyClass("sticky-nav");
        projectHeight("taller");
      } else {
        setStickyClass("");
        projectHeight("");
      }
    }
  };

  return (
    <div className={`navbar ${stickyClass}`}>
      <div className="header-links-sticky-container">
        <div className="header-links-sticky-item">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-300}
            duration={800}
          >
            <h1 className="links">Home</h1>
          </Link>
        </div>
        <div className="header-links-sticky-item">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}
          >
            <h1 className="links">Projects</h1>
          </Link>
        </div>
        <div className="header-links-sticky-item">
          <Link
            activeClass="active"
            to="demo"
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}
          >
            <h1 className="links">Demo</h1>
          </Link>
        </div>
        <div className="header-links-sticky-item">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-55}
            duration={500}
          >
            <h1 className="links">Contact</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React, { useRef, useState } from "react";
import { eToM, mToE } from "../helpers/morse";
import { useDraggable } from "@neodrag/react";
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
// css imports
import "swiper/swiper.min.css";
import "semantic-ui-css/semantic.min.css";
import "98.css";
import "../styles/stylesheet.scss";
// assets imports
import qr from "../assets/qr-code.png";
import pdf from "../files/Norden-Tenzin-Resume.pdf";
import resumeIcon from "../assets/resume.svg";
import githubIcon from "../assets/github.svg";
import instagramIcon from "../assets/instagram_xray.svg";
import emailIcon from "../assets/email.svg";
import linkedinIcon from "../assets/linkedin_xray.svg";
// components
import NavBar from "../components/NavBar";

const LandingPage = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [english, setEnglish] = useState("");
  const [morse, setMorse] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [projectClass, setProjectClass] = useState("");

  const contextRef = useRef<HTMLInputElement>(null);
  const draggableMorseTranslatorRef = useRef(null);
  useDraggable(draggableMorseTranslatorRef, {
    handle: ".title-bar",
    bounds: "parent",
  });
  const draggableMorseCheatSheetRef = useRef(null);
  useDraggable(draggableMorseCheatSheetRef, {
    handle: ".title-bar",
    bounds: "parent",
  });

  // componentDidMount() {
  //   this.updateWindowDimensions();
  //   window.addEventListener("resize", this.updateWindowDimensions);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateWindowDimensions);
  // }

  // updateWindowDimensions() {
  //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  // }

  const englishInput = (e: any) => {
    setEnglish("");
    setMorse("");
    if (e.target !== null) {
      let x = eToM(e.target.value);
      setEnglish(e.target.value);
      setMorse(x);
    }
  };

  const morseInput = (e: any) => {
    setEnglish("");
    setMorse("");
    let x = mToE(e.target.value);
    setEnglish(x);
    setMorse(e.target.value);
  };

  function projectHeight(styleClass: string) {
    setProjectClass(styleClass);
  }

  return (
    <div className="wrapper">
      {width >= 1500 ? (
        <img src={qr} width="100" className="background-logo" />
      ) : (
        ""
      )}
      <div className="landing">
        {/* Intro */}
        <div className="intro" id="home" style={{ height: height - 64 }}>
          <div className="header-container">
            <p className="header-logo">HEY, IM TENZIN NORDEN</p>
          </div>

          <div className="para-wrapper">
            <p className="paragraph">
              I'm a programmer, artist, gamer and an avid cook. A
              <span className="rutgers"> Rutgers </span>
              NB Alumni with a Bachelors of Science in Computer Science.
              Interested in all facets of programming.
              <br />
              Currently residing in
              <br />
              <div className="location">
                <span style={{ textDecoration: "line-through" }}>
                  Hoboken, NJ.
                </span>
                <span> Manali, HP</span>
              </div>
            </p>
          </div>
        </div>

        {/* Sticky NavBar */}
        <NavBar projectHeight={projectHeight} />

        {/* project showcase*/}
        <div>
          <div className={`my-projects ${projectClass}`} id="projects">
            <h1 className="header-title">Projects</h1>
            <div className="container">
              {/* PicPackr */}
              <div className="item">
                <a
                  className="link-header"
                  href="https://github.com/Norden-Tenzin/IOS-ImageCompressionApp"
                >
                  PicPackr
                </a>
                <p className="info">Built Using: Swift, SwiftUI, Figma</p>
                <p className="info">
                  This was my first IOS App, having built apps on flutter
                  SwiftUI gave me a similar experiences. And happy to say I
                  enjoyed making the App and will continue to create more in the
                  future. I wanted to not have to think too much on App ideas
                  and just picked an already exisiting Idea that I could put my
                  spin on.
                </p>
              </div>
              {/* LstMkr */}
              <div className="item">
                <a
                  className="link-header"
                  href="https://github.com/Norden-Tenzin/flutter_lstMkr"
                >
                  LstMkr
                </a>
                <p className="info">Built Using: Dart, Flutter, Figma</p>
                <p className="info">
                  I wanted an App that would let me track my weekly tasks like
                  gym laundry etc. Im sure if I looked I could have found 20
                  better alternatives built by much smarter people than me, but
                  I wanted to give this Idea a shot. I used flutter for this as
                  I was familar having built some simple apps using it already.
                </p>
              </div>
              {/* Menu App */}
              <div className="item">
                <a
                  className="link-header"
                  href="https://github.com/Norden-Tenzin/menu-app"
                >
                  Menu App
                </a>
                <p className="info">
                  Built Using: React, TypeScript, Vite, Sass, Firebase, Figma
                </p>
                <p className="info">
                  I wanted to build a way for people to scan a qr code and order
                  together as a table. While I could have built it as a mobile
                  App I wanted it to be as accessible as possible, so I landed
                  making a web app. While having built the core functionality I
                  wish to build on top of this in the future to make a product.
                </p>
              </div>
              {/* Ck3 DNA */}
              <div className="item">
                <a
                  className="link-header"
                  href="https://github.com/Norden-Tenzin/ck3-dna"
                >
                  CK3 DNA
                </a>
                <p className="info">
                  Built Using: React, TypeScript, Vite, Sass, Firebase, Figma
                </p>
                <p className="info">
                  This website is a place where people can share their
                  characters' DNA from Crusader Kings 3. The website allows
                  users to upload their characters from the game Crusader Kings
                  3. Users can also browse for other characters posted on the
                  website.
                </p>
              </div>
              {/* Pychess */}
              <div className="item">
                <a
                  className="link-header"
                  href="https://github.com/Norden-Tenzin/pychess"
                >
                  PYCHESS
                </a>
                <p className="info">Built Using: Python, Pygame, PIL</p>
                <p className="info">
                  This was my first Python personal project. I wanted to make
                  not only just a python chess game, but also to have a robust
                  UI and user experience. Coded in python using the pygame
                  framework for the visuals like sprites and GUI. Overall, this
                  project was a great learning experience and a lot of fun to
                  work on. And I hope to build more on this.
                </p>
              </div>
              {/* Personal Website */}
              <div className="item">
                <a
                  className="link-header"
                  href="https://github.com/Norden-Tenzin/personal-website"
                >
                  PERSONAL WEBSITE
                </a>
                <p className="info">
                  Built Using: React, TypeScript, Vite, Sass, Firebase, Figma
                </p>
                <p className="info">
                  I have built this same website 2 times over as I have learnt
                  and gotten better at using React. Hosted on Firebase. This
                  website is a great place where I apply the new things that I
                  have picked up working on other projects.
                </p>
              </div>
              {/* AI projects */}
              <div className="item">
                <a
                  className="link-header"
                  href="https://github.com/Norden-Tenzin/440ArtificialIntelligence"
                >
                  CS 440: AI PROJECTS
                </a>
                <p className="info">
                  Built Using: Python, Pygame, CV2, Numpy, PIL, Pandas
                </p>
                <p className="info">
                  Used python to create multiple projects such as Colorizer,
                  Maze Solver, Minesweeper Solver and Helper, and more. These
                  were all School Projects for CS 440: Intro to AI. In addition
                  to using Python to create the algorithms, I also utilized
                  pygame to create UI for the projects. Overall, these projects
                  allowed me to gain valuable experience in the field of AI and
                  machine learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DEMO code*/}
        <div className="interactive" id="demo" style={{ height: height - 64 }}>
          <h1 className="header-title">Demo</h1>
          <div ref={draggableMorseTranslatorRef} className="window my-window">
            <div className="title-bar">
              <div className="title-bar-text">Morse Translator</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
              </div>
            </div>
            <div className="window-body">
              <div className="field-grid">
                <div
                  className="field-row-stacked"
                  style={{ gridColumn: "1/2" }}
                >
                  <label>English</label>
                  <textarea
                    rows={4}
                    style={{
                      resize: "none",
                      height: "100%",
                      width: "100%",
                      fontSize: 16,
                      padding: 5,
                    }}
                    id="english"
                    placeholder="English"
                    value={english}
                    onChange={englishInput}
                  ></textarea>
                </div>
                <div
                  className="field-row-stacked"
                  style={{
                    gridColumn: "2/3",
                    marginTop: 0,
                  }}
                >
                  <label>Morse</label>
                  <textarea
                    rows={4}
                    style={{
                      resize: "none",
                      height: "100%",
                      width: "100%",
                      fontSize: 16,
                      padding: 5,
                    }}
                    id="morse"
                    placeholder="Morse"
                    value={morse}
                    onChange={morseInput}
                  ></textarea>
                </div>
                <p
                  style={{
                    gridColumn: "1/3",
                    marginTop: 0,
                    textAlign: "center",
                    fontSize: 14,
                    margin: "10px 0 10px 0",
                  }}
                >
                  A ".-", B "-...", C "-.-.", D "-..", E ".", F "..-.", G "--.",
                  H "....", I "..", J ".---", K "-.-", L ".-..", M "--", N "-.",
                  O "---", P ".--.", Q "--.-", R ".-.", S "...", T "-", U "..-",
                  V "...-", W ".--", X "-..-", Y "-.--", Z "--..",
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer" id="contact">
          <span className="contact-header">Say Hi!!</span>
          <div className="contact-email-container">
            <span className="contact-text">
              email me @ nordentenzinwork@gmail.com
            </span>
            <a
              className="contact-text"
              href="mailto:nordentenzinwork@gmail.com"
            >
              <SiMinutemailer />
            </a>
          </div>

          <div className="icon-container">
            <a href="https://github.com/Norden-Tenzin" className="icon-link">
              <IoLogoGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/tenzin-norden"
              className="icon-link"
            >
              <IoLogoLinkedin className="icon" />
            </a>
            <a href="https://www.instagram.com/nordten/" className="icon-link">
              <IoLogoInstagram className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

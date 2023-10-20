import "../styles/picpackr.scss";
// import appBlk from "../assets/picpackr/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
// import appWht from "../assets/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export default function SkyStatePage() {
  const imgs = [
    "https://firebasestorage.googleapis.com/v0/b/personal-website-3e90d.appspot.com/o/skystate%2FFrame%2018.png?alt=media&token=98e849b8-80f7-4e57-8dd1-0b7c7c762ee6",
    "https://firebasestorage.googleapis.com/v0/b/personal-website-3e90d.appspot.com/o/skystate%2FFrame%2023.png?alt=media&token=1320d08a-8d1d-42ee-8387-da9fa46f27c8",
  ];
  const navigate = useNavigate();

  return (
    <div className="pp-wrapper">
      <h1 className="pp-title">SkyState</h1>
      <p className="pp-subtitle">
        SkyState is a barebones simple weather app for the minimalist in you.
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        <span className="pp-subtitle" style={{ paddingBottom: "15px" }}>
          By
        </span>
        <a
          className="pp-subtitle"
          style={{ color: "#004a55", cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Tenzin Norden
        </a>
      </div>
      {/* <img className="pp-app-download" style={{ margin: "0px" }} src={appWht} /> */}
      <div className="pp-img-card-grid">
        {imgs.map((img, index) => {
          return <Card img={img} key={index} />;
        })}
      </div>
      <div className="footer" id="contact">
        <span className="contact-header">Support</span>
        <div className="contact-email-container">
          <span className="contact-text">
            email me @ nordentenzinwork@gmail.com
          </span>
          <a className="contact-text" href="mailto:nordentenzinwork@gmail.com">
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
  );
}

function Card({ img }: { img: string }) {
  return (
    <div className="pp-img-card-item">
      <img className="pp-img" src={img} />
    </div>
  );
}

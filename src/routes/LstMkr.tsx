import "../styles/picpackr.scss";
// import appBlk from "../assets/picpackr/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
// import appWht from "../assets/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export default function LstMkrPPPage() {
  const imgs = [
    "https://firebasestorage.googleapis.com/v0/b/personal-website-3e90d.appspot.com/o/lstmkr%2FFrame%2018.png?alt=media&token=5ec28bdd-02d9-4b1d-9ade-d29a010c32c0",
    "https://firebasestorage.googleapis.com/v0/b/personal-website-3e90d.appspot.com/o/lstmkr%2FFrame%2019.png?alt=media&token=93a8f7dc-2f99-4038-808b-5b4b36882e8e",
    "https://firebasestorage.googleapis.com/v0/b/personal-website-3e90d.appspot.com/o/lstmkr%2FFrame%2020.png?alt=media&token=40f8a16a-9473-4e27-95a8-fc3a1dcaef3a",
  ];
  const navigate = useNavigate();

  return (
    <div className="pp-wrapper">
      <h1 className="pp-title">LstMkr</h1>
      <p className="pp-subtitle">
        LstMkr is a straightforward and user-friendly app designed to help you
        keep track of your lists and notes with ease
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

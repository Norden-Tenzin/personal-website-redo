import "../styles/picpackr.scss";
// import appBlk from "../assets/picpackr/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
// import appWht from "../assets/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export default function PicPackrPage() {
  const imgs = [
    "https://firebasestorage.googleapis.com/v0/b/personal-website-3e90d.appspot.com/o/acnh%2Fframe1.png?alt=media&token=206c4359-de6d-48c8-af14-d4f00e722e15",
    "https://firebasestorage.googleapis.com/v0/b/personal-website-3e90d.appspot.com/o/acnh%2Fframe2.png?alt=media&token=a5ef8d3b-fdc8-42e3-a6a9-9f278098dc98",
    "https://firebasestorage.googleapis.com/v0/b/personal-website-3e90d.appspot.com/o/acnh%2Fframe3.png?alt=media&token=29228dca-fc58-4cb1-88f6-c4a8f6d28ec6",
    "https://firebasestorage.googleapis.com/v0/b/personal-website-3e90d.appspot.com/o/acnh%2Fframe4.png?alt=media&token=6c7b9094-aa8f-4c27-bf52-d70a9a0eb5c7",
  ];
  const navigate = useNavigate();

  return (
    <div className="pp-wrapper">
      <h1 className="pp-title">ACNH Villager Finder</h1>
      <p className="pp-subtitle">Fun way to find villagers for your Island</p>
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

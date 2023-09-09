import "../styles/picpackr.scss";
// import appBlk from "../assets/picpackr/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import appWht from "../assets/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export default function PicPackrPage() {
  const imgs = [
    "https://firebasestorage.googleapis.com/v0/b/personal-website-3e90d.appspot.com/o/picpackr%2Fframe1.png?alt=media&token=ac2be4bb-fe96-4313-b28f-fafc9091b8e6",
    "https://firebasestorage.googleapis.com/v0/b/personal-website-3e90d.appspot.com/o/picpackr%2Fframe2.png?alt=media&token=7f3c5bc2-8d03-4c7b-a3ec-e727ed348e84",
    "https://firebasestorage.googleapis.com/v0/b/personal-website-3e90d.appspot.com/o/picpackr%2Fframe3.png?alt=media&token=838f41fc-7688-401e-af63-09b9ec0dd5bb",
    "https://firebasestorage.googleapis.com/v0/b/personal-website-3e90d.appspot.com/o/picpackr%2Fframe4.png?alt=media&token=8faab151-25da-48be-ac43-3e1fab64ac50",
  ];

  const navigate = useNavigate();

  return (
    <div className="pp-wrapper">
      <h1 className="pp-title">PicPackr</h1>
      <p className="pp-subtitle" style={{ paddingBottom: "10px" }}>
        Your go to image compression App
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

      <a href="https://apps.apple.com/app/id6450822867">
        <img
          className="pp-app-download"
          style={{ margin: "0px" }}
          src={appWht}
        />
      </a>
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

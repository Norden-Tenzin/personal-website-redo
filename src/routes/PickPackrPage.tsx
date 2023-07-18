import "../styles/picpackr.scss";
// import appBlk from "../assets/picpackr/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import appWht from "../assets/picpackr/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";
import img1 from "../assets/picpackr/Frame 18.png";
import img2 from "../assets/picpackr/Frame 19.png";
import img3 from "../assets/picpackr/Frame 20.png";
import img4 from "../assets/picpackr/Frame 21.png";
import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";

export default function PickPackrPage() {
  const imgs = [img1, img2, img3, img4];
  return (
    <div className="pp-wrapper">
      <h1 className="pp-title">PicPackr</h1>
      <p className="pp-subtitle">Your go to image compression App</p>
      <img className="pp-app-download" src={appWht} />
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

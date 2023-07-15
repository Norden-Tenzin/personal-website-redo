import "../styles/picpackr.scss";
import appBlk from "../assets/picpackr/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import appWht from "../assets/picpackr/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg";
import img1 from "../assets/picpackr/Frame 18.png";
import img2 from "../assets/picpackr/Frame 19.png";
import img3 from "../assets/picpackr/Frame 20.png";
import img4 from "../assets/picpackr/Frame 21.png";

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

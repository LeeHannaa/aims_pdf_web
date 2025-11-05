import "../App.css";
import Leaflet1 from "../img/1.jpg";
import Leaflet2 from "../img/2.jpg";
import Leaflet3 from "../img/3.jpg";
import Leaflet4 from "../img/4.jpg";
import Leaflet5 from "../img/5.jpg";
import Leaflet6 from "../img/6.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../carousel.css";

export const Leaflet = () => {
  return (
    <div style={{ width: "200px" }}>
      <Carousel
        showArrows={true}
        infiniteLoop
        // autoPlay
        interval={2000}
        showThumbs={true}
        showStatus={false}
      >
        <div>
          <img src={Leaflet1} alt="1" />
        </div>
        <div>
          <img src={Leaflet2} alt="2" />
        </div>
        <div>
          <img src={Leaflet3} alt="3" />
        </div>
        <div>
          <img src={Leaflet4} alt="4" />
        </div>
        <div>
          <img src={Leaflet5} alt="5" />
        </div>
        <div>
          <img src={Leaflet6} alt="6" />
        </div>
      </Carousel>
    </div>
  );
};

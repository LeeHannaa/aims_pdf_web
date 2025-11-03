import "../App.css";
import Leaflet1 from "../img/leaflet1.png";
import Leaflet2 from "../img/leaflet2.png";

export const Leaflet = () => {
  return (
    <div className="Leaflet-div">
      <img
        className="Leaflet-img"
        src={Leaflet1}
        alt="leaflet1"
        crossOrigin="anonymous"
      />
      <img
        className="Leaflet-img"
        src={Leaflet2}
        alt="leaflet2"
        crossOrigin="anonymous"
      />
    </div>
  );
};

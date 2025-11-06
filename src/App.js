import "./App.css";
import "./Component.css";
import { FaFileDownload } from "react-icons/fa";
import { Header } from "./component/Header";
import { Leaflet } from "./component/Leaflet";
import { PdfDownload } from "./component/PdfDownload";
import { Footer } from "./component/Footer";
import { PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  const BT = () => {
    return (
      <div className="BT-div">
        <PDFDownloadLink document={<PdfDownload />} fileName="aims.pdf">
          <FaFileDownload
            style={{
              pointer: "cursor",
              color: "white",
              alignItems: "flex-start",
              fontSize: "20px",
            }}
          />
        </PDFDownloadLink>
      </div>
    );
  };
  return (
    <div className="App">
      <div className="App-div">
        <Header />
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginTop: "16px",
            paddingLeft: "32px",
          }}
        >
          <Leaflet />
          <BT />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

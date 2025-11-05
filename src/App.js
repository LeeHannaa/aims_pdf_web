import "./App.css";
import "./component.css";

// import { MdContactMail } from "react-icons/md";
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
        {/* <MdContactMail
          style={{ marginRight: "20px", pointer: "cursor" }}
          onClick={() => window.open("https://aims.kr/HCP01_005", "_blank")}
        /> */}
        <PDFDownloadLink document={<PdfDownload />} fileName="aims.pdf">
          <FaFileDownload
            style={{
              pointer: "cursor",
              color: "white",
              paddingLeft: "50px",
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
            marginLeft: "50px",
            marginTop: "16px",
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

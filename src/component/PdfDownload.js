import Leaflet1 from "../img/leaflet1.png";
import Leaflet2 from "../img/leaflet2.png";
import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";

export const PdfDownload = () => {
  const styles = StyleSheet.create({
    page: { padding: 30 },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image
          className="Leaflet-img"
          src={Leaflet1}
          alt="leaflet1"
          crossOrigin="anonymous"
        />
        <Image
          className="Leaflet-img"
          src={Leaflet2}
          alt="leaflet2"
          crossOrigin="anonymous"
        />
      </Page>
    </Document>
  );
};

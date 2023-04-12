import React from "react";
import styles from "./onas.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function oNas() {
  return (
    <>
      <h1 className={styles.title}>O Nas</h1>
      <Container fluid style={{ maxWidth: "1320px", paddingBottom: "2rem", textAlign: "left" }}>
        <Row style={{ marginTop: "2rem" }}>
          <Col md={12} lg={12}>
            <p>
          W 2023 roku firma POL-EKO kontynuuje swoją działalność jako producent wysokiej jakości urządzeń laboratoryjnych i przemysłowych. Firma oferuje szeroki zakres produktów, w tym m.in. szafy laboratoryjne, komory klimatyczne, piece laboratoryjne, suszarki laboratoryjne oraz wiele innych.</p>

          <p>Firma POL-EKO dba o jakość swoich produktów i stosuje najnowocześniejsze technologie w procesie produkcji. Firma posiada certyfikaty jakości ISO 9001, co potwierdza wysokie standardy produkcji.</p>

          <p>W 2023 roku POL-EKO dalej rozwija swoje produkty i usługi, oferując klientom innowacyjne rozwiązania i sprzęt laboratoryjny i przemysłowy dostosowany do ich potrzeb. Firma kontynuuje również ekspansję na rynki zagraniczne, eksportując swoje produkty do wielu krajów na całym świecie.</p>

          <p><b>POL-EKO w 2023 roku nadal pozostaje jednym z wiodących producentów sprzętu laboratoryjnego w Polsce i zyskał uznanie zarówno w kraju, jak i za granicą.</b></p>

          </Col>
         
        </Row>
      </Container>
      <Container fluid style={{ maxWidth: "100%", padding: 0, textAlign: "left" }}>
        <Row style={{}}>
            <Col md={12} lg={12}>
                <div className={styles.coverPhoto}></div>
            </Col>
        </Row>
      </Container>
    </>
  );
}

export default oNas;

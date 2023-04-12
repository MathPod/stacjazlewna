import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Kontakt.module.css";
import { BarChartLineFill } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";
import { EnvelopeFill } from "react-bootstrap-icons";




function Kontakt() {
  return (
    <>
      <h1>KONTAKT</h1>
      <Container
        fluid
        style={{ maxWidth: "1320px", paddingBottom: "2rem", textAlign: "left" }}
      >
        <Row style={{ marginTop: "2rem" }} className={styles.contactRow}>
          <Col md={12} lg={6} className={styles.sellerContactBox}>
            <h4>Masz pytanie do specjalisty?</h4>
            <p className={styles.contactDescription}>
              Zadzwoń lub napisz aby uzyskać wsparcie odnośnie urządzeń
            </p>
            <div className={styles.sellerPhoto}></div>
            <p><TelephoneFill className={styles.contactIcons} /> Tel: <a href="tel:+48500059768">+48 500 059 768</a></p>
            <p><EnvelopeFill className={styles.contactIcons} /> Email: <a href="mailto:mateusz.dziuba@pol-eko.com.pl">mateusz.dziuba@pol-eko.com.pl</a></p>
          </Col>
          <Col md={12} lg={6} style={{position: 'relative'}}>
            <h4>Dowiedz się więcej o naszej ofercie</h4>
            <a className={styles.logoPerfectEnvironment} href="https://pol-eko.com.pl"><div ></div></a>
          </Col>
        </Row>

      </Container>
    </>
  );
}
export default Kontakt;

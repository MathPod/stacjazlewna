import React from "react";
import style from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";


function Footer() {
  return (
    <div className={style.footerContainer}>
      <Container fluid >
        <Row className={style.rowFooter}>
          <Col lg={4} md={4} sm={12} className={style.colFooter}>
            <h4>Gospodarka wodno-ściekowa</h4>
            <ul className={style.footerUl}>
                <li><Link to="/stacje-zlewne">Stacje Zlewne</Link></li>
                <li><Link to="/stacje-zlewne">Aparaty do poboru prób</Link></li>
                <li><Link to="/stacje-zlewne">Urządzenia do wydawania wody</Link></li>
                <li><Link to="/stacje-zlewne">System odprowadzania wód międzyosadwych</Link></li>
                <li><Link to="/stacje-zlewne">Punkty zlewne dla kamperów</Link></li>
                <li><Link to="/stacje-zlewne">Przenośne aparaty do poboru prób</Link></li>
            </ul>
          </Col>
          <Col lg={4} md={4} sm={12} className={style.colFooter}>
            <h4>O Firmie</h4>
          </Col>
          <Col lg={4} md={4} sm={12} className={style.colFooter}>
            <h4>Kontakt</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;

import React from "react";
import style from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={style.footerContainer}>
      <Container fluid>
        <Row className={style.rowFooter}>
          <Col lg={3} md={3} sm={12} className={style.colFooter}>
            <h4>
              Gospodarka <br />
              wodno-ściekowa
            </h4>
            <ul className={style.footerUl}>
              <li>
                <Link to="/stacje-zlewne">Stacje Zlewne</Link>
              </li>
              <li>
                <Link to="/aparaty-do-poboru-prob">Aparaty do poboru prób</Link>
              </li>
              <li>
                <Link to="/hydromat">Urządzenia do wydawania wody</Link>
              </li>
              <li>
                <Link to="/system-do-odprowadzania-wod-miedzyosadowych">
                  System odprowadzania wód międzyosadwych
                </Link>
              </li>
              <li>
                <Link to="/stacja-zlewna-eurodrop">
                  Punkty zlewne dla kamperów
                </Link>
              </li>
              <li>
                <Link to="/przenosne-aparaty-do-poboru-prob">
                  Przenośne aparaty do poboru prób
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={3} sm={12} className={style.colFooter}>
            <h4>O Firmie</h4>
          </Col>
          <Col lg={3} md={3} sm={12} className={style.colFooter}>
            <h4>Kontakt</h4>
            <ul className={style.footerUl}>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
              <li>
                <Link to="/o-nas">O NAS</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={3} sm={12} className={style.colFooter}>
            <div className={style.animateLogo}></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;

import React from "react";
import style from "./ProductSite.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import productImg from "../../assets/img/products/stacja-zlewna-sciekow.webp"


function ProductSite(props) {
  return (
    <Container fluid style={{ maxWidth: "1320px" }}>
      <Row style={{ marginTop: "2rem" }}>
        <Col md={5} lg={5}>
            <img src={productImg} style={{maxWidth: "100%"}}/>
        </Col>
        <Col md={7} lg={7} className={style.headerContent}>
            <h2>Stacja zlewna ścieków dowożonych FEKO+ /S</h2>
            <ul>
                <li>Kontener ze stali nierdzewnej</li>
                <li>Ściany zewnętrzne typu "sandwich" z izolacją 100 mm, wykonane ze stali nierdzewnej (wewnątrz i nazewnątrz)</li>
                <li>Ciąg spustowy ze stali nierdzewnej 0H18N9 z naczyniem pomiarowym</li>
                <li>Podłoga wykonana z blachy aluminiowej ryflowanej</li>
                <li>Wentylacja mechaniczna</li>
                <li>Szafka zewnętrzna sterująca-identyfikująca wykonana ze stali nierdzewnej</li>
                <li>Przepływomierz oraz wybrane zestawy do pomiarów fizykochemicznych Endress+Hauser</li>
            </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductSite;

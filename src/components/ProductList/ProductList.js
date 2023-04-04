import React from "react";
import style from "./ProductList.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Product from "./Product/Product";

function ProductList() {
  return (
    <Container fluid style={{ maxWidth: "1320px" }}>
      <h2 className={style.h2Title}>Urządzenia wodno ściekowe</h2>
      <Row style={{marginTop: "2rem"}}>
        <Col mb={5} md={3} sm={6} style={{ marginBottom: "2rem" }}>
          <Product />
        </Col>
        <Col mb={5} md={3} sm={6} style={{ marginBottom: "2rem" }}>
          <Product />
        </Col>
        <Col mb={5} md={3} sm={6} style={{ marginBottom: "2rem" }}>
          <Product />
        </Col>
        <Col mb={5} md={3} sm={6} style={{ marginBottom: "2rem" }}>
          <Product />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductList;

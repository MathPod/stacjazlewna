import React from "react";
import style from "./style.module.css";
import Slider from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductList from "../../components/ProductList/ProductList";

function Home(props) {
  return (
    <>
      <Slider />

      <Container fluid style={{ maxWidth: "1320px", paddingBottom: "2rem", textAlign: 'left' }}>
        <Row style={{ marginTop: "2rem" }}>
          <Col md={12} lg={12} >
            <h2 style={{ textAlign: "left" }}>Produkty</h2>
            <p>Stacje zlewne ścieków dowożonych to urządzenia identyfikujące dostawców ścieków, w połączeniu z pomiarem ilości dostarczonych ścieków oraz ich jakości, a także kontrolą tych parametrów.</p>
          </Col>
        </Row>
      </Container>
      <ProductList
        filteredCategoryDevices={props.filteredCategoryDevices}
        listLinkTo="category"
      />
    </>
  );
}

export default Home;

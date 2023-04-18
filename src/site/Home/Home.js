import React from "react";
import style from "./style.module.css";
import Slider from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CompanyBrandInfo from "../../components/CompanyBrandInfo/CompanyBrandInfo";

import ProductList from "../../components/ProductList/ProductList";

function Home(props) {
  return (
    <>
      <Slider />

      <CompanyBrandInfo />
      <Container
        fluid
        style={{ maxWidth: "1320px", paddingBottom: "2rem", textAlign: "left" }}
      >
        <Row style={{ marginTop: "2rem" }}>
          <Col md={12} lg={12}>
            <h2 style={{ textAlign: "left" }}>
              Pełne wsparcie i produkcja urządzeń w POL-EKO
            </h2>
            <p>
              Firma POL-EKO-APARATURA działa na polskim rynku od 1990 roku.
              Obecnie eksportuje swoje produkty do ponad 90 krajów na całym
              świecie. Dzięki wieloletniemu doświadczeniu, firma doskonale zna i
              odpowiada na potrzeby swoich klientów. Poza działaniami
              produkcyjnymi, POL-EKO-APARATURA zapewnia kompleksowe działania
              wspierające klientów po etapie sprzedażowym, a także organizuje
              szkolenia produktowe
            </p>
          </Col>
        </Row>
      </Container>
      <ProductList
        filteredCategoryDevices={props.filteredCategoryDevices}
        listLinkTo="category"
      />
      <Container
        fluid
        style={{ maxWidth: "1320px", paddingBottom: "2rem", textAlign: "left" }}
      >
        <Row style={{ marginTop: "2rem" }}>
          <Col md={12} lg={6}>
            <p>
              POL-EKO-APARATURA to rodzinna spółka, która funkcjonuje na rynku
              od ponad 30 lat. Jesteśmy wiodącym producentem urządzeń
              termostatycznych, mebli laboratoryjnych, wyposażenia dla
              laboratoriów oraz przemysłu. Obecnie sprzedajemy produkty do ponad
              90 krajów na całym świecie co czyni nas przedsiębiorstwem o
              międzynarodowym zasięgu. Codziennie nasi klienci mogą liczyć na
              wsparcie w doborze odpowiedniego sprzętu dzięki naszym
              doświadczonym pracownikom. Dbałość o jakość produktów i
              kompleksowa obsługa klienta stanowi dla nas priorytet.
            </p>
          </Col>
          <Col md={12} lg={6}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/--uOmKHdPQM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

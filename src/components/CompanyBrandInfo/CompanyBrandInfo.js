import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Activity } from "react-bootstrap-icons";
import { PersonWorkspace } from "react-bootstrap-icons";
import { Asterisk } from "react-bootstrap-icons";

export default function CompanyBrandInfo() {
  return (
    <div style={{ backgroundColor: "#007cc3", color: "white" }}>
      <Container fluid style={{ maxWidth: "1320px", paddingTop: "4rem", marginBottom: "4rem" }}>
        <Row>
          <Col mb={5} md={3} sm={6} style={{ marginBottom: "2rem" }}>
            <Activity style={{ fontSize: "6rem" }} />
            <h3>Profesjonalna Obsługa</h3>
          </Col>
          <Col mb={5} md={3} sm={6} style={{ marginBottom: "2rem" }}>
            <PersonWorkspace style={{ fontSize: "6rem" }} />
            <h3>Szybka Produkcja</h3>
          </Col>
          <Col mb={5} md={3} sm={6} style={{ marginBottom: "2rem" }}>
            <Asterisk style={{ fontSize: "6rem" }} />
            <h3>Doradztwo i Szkolenia</h3>
          </Col>
          <Col mb={5} md={3} sm={6} style={{ marginBottom: "2rem" }}>
            <Asterisk style={{ fontSize: "6rem" }} />
            <h3>Doradztwo i Szkolenia</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

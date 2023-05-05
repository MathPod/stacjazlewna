import React, { useEffect, useState } from "react";
import style from "./ProductList.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Product from "./Product/Product";

function ProductList(props) {
  const[listLinkTo, setListLinkTo] = useState(props.listLinkTo)

  
 
  return (
    <Container fluid style={{ maxWidth: "1320px" }}>
      
      <Row style={{ marginTop: "2rem" }}>
      {props.filteredCategoryDevices.map((element) => {
       
        return (
          <>
          <Col mb={5} md={3} sm={6} style={{ marginBottom: "2rem" }} key={element.id}>
            <Product {...element} listLinkTo={listLinkTo} />
          </Col>
          </>
        )
      }) }
      </Row>
      
    </Container>
    
  );
}

export default ProductList;

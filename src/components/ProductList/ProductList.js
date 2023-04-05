import React, { useEffect, useState } from "react";
import style from "./ProductList.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Product from "./Product/Product";

function ProductList() {
  const [deviceData, setDeviceData] = useState("");
  const [filteredCategoryDevices, setFilteredCategoryDevices] = useState([]);

  const filterCategoryDevices = (data) => {
    let filteredArray = [];
    let flaga = false;

    data.forEach((object, index) => {
      filteredArray.forEach((element) => {
        element.category_pl === object.category_pl
          ? (flaga = true)
          : (flaga = false);
      });
      if (flaga === false) filteredArray.push(object);
    });
   
    setFilteredCategoryDevices(filteredArray);
  };

  const generateCategoryList = () => {
    

  };

  useEffect(() => {
    fetch("/jsonData/devicesData.json")
      .then((res) => res.json())
      .then((data) => filterCategoryDevices(data));
  }, []);

  useEffect(() => {
    console.log('zmienil sie stan filteredCategoryDevices', filteredCategoryDevices)
    generateCategoryList()

  }, [filteredCategoryDevices])

  return (
    <Container fluid style={{ maxWidth: "1320px" }}>
      <h2 className={style.h2Title}>Urządzenia wodno ściekowe</h2>
      <Row style={{ marginTop: "2rem" }}>
      {(filteredCategoryDevices !== []) ? filteredCategoryDevices.map((element) => {
        return (
          <>
          <Col mb={5} md={3} sm={6} style={{ marginBottom: "2rem" }}>
            <Product {...element}/>
          </Col>
          </>
        )
      }) : <p>niema</p> }
      </Row>
      
    </Container>
    
  );
}

export default ProductList;

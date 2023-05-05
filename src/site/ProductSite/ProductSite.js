import React, { useEffect, useState, useLayoutEffect, setHtml } from "react";
import style from "./ProductSite.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams } from "react-router-dom";
import productImg from "../../assets/img/products/stacja-zlewna-sciekow.webp";
import { Collapse } from "bootstrap";
import parse from "html-react-parser";
import ProductList from "../../components/ProductList/ProductList";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";

function ProductSite(props) {
  const params = useParams();
  const [deviceUrl, setDeviceUrl] = useState(params.name);
  const [devicesData, setDevicesData] = useState([]);
  const [filteredDevice, setFilteredDevice] = useState("");


  const filterDevice = (data) => {
    const filteredArray = data.filter(element => element.url_pl === deviceUrl)
    setFilteredDevice(filteredArray)
  }
  
  useEffect(() => {
   
    //setDeviceUrl(params.name);
   

    fetch("/jsonData/devicesData.json")
      .then((res) => res.json())
      .then((data) => {
        setDevicesData(data);
        filterDevice(data)
      });

  }, []);

 

  return (
    <Container fluid style={{ maxWidth: "1320px", paddingBottom: '2rem'}}>
      <BreadCrumbs />
      <Row style={{ marginTop: "2rem" }}>
        <Col md={5} lg={5}>
          {filteredDevice && <img src={`/img/devices_img/${filteredDevice[0].url_pl}.webp`} style={{ maxWidth: "100%" }} />}
        </Col>
        <Col
          md={7}
          lg={7}
          className={`productSiteHeaderContent ${style.headerContent}`}
        >
          {/* <h2 className={style.h2title}>{(filteredDevice && filteredDevice[0].name_pl)}</h2> */}
          <ul>
            {/* <li>Kontener ze stali nierdzewnej</li>
            <li>
              Ściany zewnętrzne typu "sandwich" z izolacją 100 mm, wykonane ze
              stali nierdzewnej (wewnątrz i nazewnątrz)
            </li>
            <li>
              Ciąg spustowy ze stali nierdzewnej 0H18N9 z naczyniem pomiarowym
            </li>
            <li>Podłoga wykonana z blachy aluminiowej ryflowanej</li>
            <li>Wentylacja mechaniczna</li>
            <li>
              Szafka zewnętrzna sterująca-identyfikująca wykonana ze stali
              nierdzewnej
            </li>
            <li>
              Przepływomierz oraz wybrane zestawy do pomiarów fizykochemicznych
              Endress+Hauser
            </li> */}
            {/* {(filteredDevice && <div dangerouslySetInnerHTML={{__html: filteredDevice[0].opis_pl}}></div>)} */}
            {filteredDevice && parse(filteredDevice[0].opis_pl)}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductSite;





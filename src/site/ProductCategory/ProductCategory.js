import React, { useEffect, useState } from "react";
import style from "./ProductCategory.css";
import ProductList from "../../components/ProductList/ProductList";
import { useParams } from "react-router-dom";

function ProductCategory(props) {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [devicesData, setDevicesData] = useState([]);
  const [filteredDataArray, setFilteredDataArray] = useState([]);
  const [categoryUrl, setCategoryUrl] = useState('')

  const params = useParams();

  useEffect(() => {
    setCategoryTitle(props.title);
    
  }, []);

  useEffect(() => {

    
    setCategoryUrl(params.name);

    fetch("/jsonData/devicesData.json")
      .then((res) => res.json())
      .then((data) => {
        setDevicesData(data);
      });

    setCategoryTitle();

    const filteredArray = devicesData.filter(
      (element) => element.category_pl === categoryTitle
    );

    setFilteredDataArray(filteredArray);
    console.log(filteredArray);
  }, [devicesData]);

  return (
    <>
      <h1>{props.title}</h1>

      <ProductList
        filteredCategoryDevices={filteredDataArray}
        listLinkTo="product"
      />
    </>
  );
}

export default ProductCategory;

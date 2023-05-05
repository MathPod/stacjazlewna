import React, { useEffect, useState } from "react";
import style from "./ProductCategory.css";
import ProductList from "../../components/ProductList/ProductList";
import { useParams, useLocation } from "react-router-dom";
import BreadCrumbs from "../../components/Breadcrumbs/BreadCrumbs";

function ProductCategory(props) {
  const [title, setTitle] = useState("");
  const [filteredDataArray, setFilteredDataArray] = useState([]);

  const location = useLocation();

  useEffect(() => {}, [filteredDataArray]);

  useEffect(() => {
    fetch("/jsonData/devicesData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredCategories = data.filter(
          (element) =>
            element.category_url_pl === location.pathname.replace("/", "")
        );
        setFilteredDataArray(filteredCategories);
        setTitle(filteredCategories[0].category_pl);
      });
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <BreadCrumbs />
      <ProductList
        filteredCategoryDevices={filteredDataArray}
        listLinkTo="product"
      />
    </>
  );
}

export default ProductCategory;

import React from "react";
import { Link } from "react-router-dom";
import style from "./Product.module.css";
import productImg from "../../../assets/img/products/stacja-zlewna-sciekow.webp";

function Product(props) {
  return (
    <Link to="/produkt/inkubator" className={style.link}>
      <div className={style.productBox}>
        <img src={productImg} className={style.productCover} />
        <div className="caption">
          <h4 className={style.deviceTitle}>{props.name_pl}</h4>
          <p>Short description</p>
          <div className={`btn btn-primary ${style.buttonMore}`}>WIĘCEJ</div>
        </div>
      </div>
    </Link>
  );
}

export default Product;

import React, {useState} from "react";
import { Link } from "react-router-dom";
import style from "./Product.module.css";
import productImg from "../../../assets/img/products/stacja-zlewna-sciekow.webp";

function Product(props) {
  const[listLinkTo, setListLinkTo] = useState(props.listLinkTo)
  
  let myLink = null;
  if(listLinkTo === "product") {myLink = `/${props.category_url_pl}/${props.url_pl}`}
  if(listLinkTo === "category") {myLink = `/${props.category_url_pl}`}

  return (
    <Link to={myLink} className={style.link}>
      <div className={style.productBox}>
        <img src={`/img/devices_img/${props.url_pl}.webp`} className={style.productCover} />
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

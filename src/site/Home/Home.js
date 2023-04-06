import React from "react";
import style from "./style.module.css";
import Slider from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";

import ProductList from "../../components/ProductList/ProductList";

function Home(props) {
    
    return(
        <>
        <Slider />
        <ProductList filteredCategoryDevices={props.filteredCategoryDevices} listLinkTo="category"/>
        </>
    )

}

export default Home
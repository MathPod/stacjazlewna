import React from "react";
import style from "./style.module.css";
import Slider from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";
import Content from "./Content/Content";

function Home() {

    return(
        <>
        <Slider />
        <Content />
        </>
    )

}

export default Home
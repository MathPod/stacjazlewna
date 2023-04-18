import React, { useState } from "react";
import style from "./Slider.module.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import logoPolEko from "../../assets/img/pol_eko_logo_menu/pol-eko-logo-color.png";
import slider1_background from "../../assets/img/slider/slide1_background.webp";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={style.slider}
    >
      <Carousel.Item
        className="caruselItem caruselItem1"
        // style={{ background: `url(/img/slider/slide1.webp)` }}
      >
        <img className="d-block w-100" src={logoPolEko} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label First </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caruselItem caruselItem2">
        <img className="d-block w-100" src={logoPolEko} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="caruselItem caruselItem3">
        <img className="d-block w-100" src={logoPolEko} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

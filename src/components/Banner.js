import React from "react";
import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="w-100 d-md-block"
          src={require("../assets/banner1.jpg")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 d-md-block"
          src={require("../assets/banner2.jpg")}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;

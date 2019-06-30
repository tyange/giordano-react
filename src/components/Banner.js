import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="/event01">
          <img
            className="w-100 d-md-block"
            src={require("../assets/banner1.jpg")}
            alt="First slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/event02">
          <img
            className="w-100 d-md-block"
            src={require("../assets/banner2.jpg")}
            alt="Second slide"
          />
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;

import React from "react";
import slider_one from "../Pages/images/slide_one.png";
import slider_two from "../Pages/images/slide_two.png";
import slider_three from "../Pages/images/slide_three.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
function ImageSlider() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img src={slider_one} alt="First slide" data-aos="fade-down" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src={slider_two} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src={slider_three} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ImageSlider;

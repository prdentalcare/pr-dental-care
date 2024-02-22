import React from "react";
// import teeth_cleaning from "../assets/video/Teeth_Cleaning.mp4";
// import slider_one from "../Pages/images/slide_one.png";
import SliderData from './SliderData';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
function ImageSlider() {
  
  return (
    <>
      <Carousel>
        {SliderData.map((e, index) => (
          <Carousel.Item interval={3000} key={index}>
            {/* <img src={slider_one} alt="First slide" data-aos="fade-down" /> */}
            <iframe src={e.url} allow="autoplay" scrolling='no' frameborder='1' allowfullscreen />
            {/* <video width="420" controls autoPlay muted loop>
            <source src="{teeth_cleaning}" type="video/mp4"/>
          </video> */}
            <div className="front_page_info">
              <h2>{e.title}</h2>
              <p>{e.description}</p>
            </div>
          </Carousel.Item>
          // <Carousel.Item interval={3000}>
          //   <img src={slider_two} alt="Second slide" />
          // </Carousel.Item>
          // <Carousel.Item interval={3000}>
          //   <img src={slider_three} alt="Third slide" />
          // </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default ImageSlider;

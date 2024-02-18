import React from "react";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
// import slider_one from "../Pages/images/slide_one.png";
import { HashLink } from "react-router-hash-link";
import ImageSlider from "../Components/ImageSlider";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="slider_container">
          <div className="slider-images">
            <div className="slider_image">
              {/* <img
                className="w-100"
                src={slider_one}
                alt="First slide"
                data-aos="fade-down"
              /> */}
              <ImageSlider></ImageSlider>
            </div>

            <div className="front_container">
              <div className="front_page_info">
                <h2
                  style={{
                    fontSize: "40px",
                    margin: "20px 0",
                    textAlign: "left",
                    lineHeight: "1.2",
                    color: "hsl(218, 70%, 18%)",
                  }}
                >
                  Providing Quality Dental Care
                </h2>
                <p>
                  Caring For The Health And Well Being Of You And Your Family
                </p>
                <div className="social_links"></div>
              </div>
              {/* <div className="slider_controls">
                <div className="circle_dot_class">
                  <span></span>
                </div>
                <div className="circle_dot_class">
                  <span></span>
                </div>
                <div className="circle_dot_class">
                  <span></span>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="clinic_container">
          <div className="clinic_info">
            <div className="basic_info" id="info_01">
              <h2>Quality Work & Hygiene</h2>
              <p>
              Our commitment to quality work and unwavering hygiene standards sets us apart. Your health, safety, and satisfaction are our top priorities.
              </p>
              <HashLink
                to={"/#contact-us"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn">Check Dr Availabilty</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_02">
              <h2>Lowest Price Guarantee</h2>
              <p>
              Our affordable prices have brought smiles to thousands, creating newfound beauty and irresistible smiles like never before!
              </p>
              <a className="transperent_btn" href="tel:7007889561">Book Now</a>
              {/* <HashLink
                to={"/dental-clinic/slot"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn">Book Now</div>
              </HashLink> */}
            </div>
            <div className="basic_info" id="info_03">
              <h2>Adaptable Timetable</h2>
              <p>
              We maintain flexible working hours, including holidays and late shifts on regular days. Additionally, we accommodate emergency bookings when needed.
              </p>

              <a className="transperent_btn" href="tel:7007889561">Call Now</a>

              {/* <HashLink
                to={"/dental-clinic/slot"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn">Check Availabilty</div>
              </HashLink> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

import React from "react";
import styles from "./About.css";
import about_img from "./images/about_img.webp";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import about_data from "./PagesData/AboutData";
const About = () => {
  return (
    <>
      <section>
        <div
          className={styles.example}
          style={{ backgroundColor: "#fff" }}
          id="about-us"
        >
          <div className="about_section_container">
            <h2 className="about_title">
              <span className="about_title_logo">
                <i className="fa-solid fa-caret-right"></i>
              </span>
              About US
            </h2>
            <div className="about_container">
              <div className="about_infos">
                <p className="about_short_descrp">{about_data.header}</p>
                <p className="about_long_descrp">{about_data.description}</p>
                <div className="about_align_btn">
                  <HashLink
                    to={"/our-doctor"}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <button className="more_info_btn">Meet our Doctor</button>
                  </HashLink>
                </div>
              </div>
              <div className="about_image">
                <img src={about_img} alt="about img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

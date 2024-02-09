import React from 'react';
import LowerFooter from '../Components/LowerFooter';
import './Contact.css';
const Contact = () => {
  const clinic_data = [
    {
      id: 1,
      c_day: 'Sunday - Friday',
      c_time: 'Morning: 11:00 AM-1:30 PM',
      c_evening_time: 'Evening: 05:30 AM-08:30 PM'
    },
    // {
    //   id: 2,
    //   c_day: 'Monday',
    //   c_time: '11:00 AM-1:30 PM | 05:30 AM-08:30 PM'
    // },
    // {
    //   id: 3,
    //   c_day: 'Tuesday',
    //   c_time: '11:00 AM-1:30 PM | 05:30 AM-08:30 PM'
    // },
    // {
    //   id: 4,
    //   c_day: 'Wednesday',
    //   c_time: '11:00 AM-1:30 PM | 05:30 AM-08:30 PM'
    // },
    // {
    //   id: 5,
    //   c_day: 'Thursday',
    //   c_time: '11:00 AM-1:30 PM | 05:30 AM-08:30 PM'
    // },
    // {
    //   id: 6,
    //   c_day: 'Friday',
    //   c_time: '11:00 AM-1:30 PM | 05:30 AM-08:30 PM'
    // },
    {
      id: 7,
      c_day: 'Saturday',
      c_time: 'CLOSED'
    }
  ];
  return (
    <>
      <section id="contact">
        <div className="contact_section_container" id="contact-us">
          <div className="container_container">
            <div className="google_map_location">
              <div className="gmap">
                <iframe
                  title="gmap_location"
                  className="gmap_iframe"
                  width="100%"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6195309829945!2d77.45562227550003!3d28.611188675676413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef6fc5b5e259%3A0xe06a3a734a68b337!2sPR&#39;s%20Dental%20Care!5e0!3m2!1sen!2sin!4v1693076122989!5m2!1sen!2sin"
                ></iframe>
              </div>
            </div>
            <div className="basic_contact_user_form">
              <div className="clinic_time_table">
                <h2 style={{ fontFamily: 'Poppins' }}>
                  <span>
                    <i className="fa-solid fa-caret-right"></i>
                  </span>
                  OPD Hours
                </h2>
              </div>
              <hr />
              {clinic_data.map((e, index) => (
                <div className="clinic_timing" key={index}>
                  <p className="current_day">{e.c_day}</p>
                  <div>
                    <p className="current_day_timing">{e.c_time}</p>
                    <p className="current_day_timing">{e.c_evening_time}</p>
                  </div>
                </div>
              ))}
              <div className="d_and_c">
                <div className="direction_to_clinic">
                  <a
                    href="https://www.google.com/maps/dir//PR's+Dental+Care,+Royal+court+market,+Noida+Extension+Greater+Noida+West,+Panchsheel+Green,+Ithaira,+Ghaziabad,+Uttar+Pradesh+201009/@28.6111887,77.4581972,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cef6fc5b5e259:0xe06a3a734a68b337!2m2!1d77.4581972!2d28.6111887?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Clinic Direction
                  </a>
                </div>
                <div className="call_to_clinic">
                  <a href="tel:8726705475">Call Clinic</a>
                </div>
              </div>
            </div>
          </div>
          <LowerFooter />

          <div className="copyright_footer">
            <p>
              <span>
                <i className="fa-regular fa-copyright"></i>
              </span>
              2023 All Rights Reserved.
              Made with <span id='teeth_color'>🦷</span> by
              <a href="/" id="clinic_name">
                PR's Dental Care.
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

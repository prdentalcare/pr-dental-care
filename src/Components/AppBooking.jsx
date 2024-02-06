import React from "react";
import { HashLink } from "react-router-hash-link";
import './AppBooking.css';

const AppBooking = () => {
  return (
    <>
      <HashLink
        to="/dental-clinic/slot"
        className="sticky_container book_appointment">
        <h3 className="book_appointment_text">BOOK APPOINTMENT</h3>
      </HashLink>
    </>
  );
};

export default AppBooking;

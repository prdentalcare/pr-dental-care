import React, { useState } from 'react';
import logo_img from './images/logo.png';
import { HashLink } from 'react-router-hash-link';
import 'font-awesome/css/font-awesome.min.css';
import './Navbar.css';
const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  const closeMobileMenu = () => {
    setActive(false);
  };
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <HashLink to="/#home">
            <img src={logo_img} alt="PR's Dental Care Logo" />
          </HashLink>
        </div>
        <div className={isActive ? 'active_links' : 'links'}>
          <div className="ContactItems">
            <i>Call Us: </i><br />
            <a className="contact" href="tel:7007889561"><i className="fas fa-phone"> </i>+91 7007889561</a><br/>
            <a className="contact" href="tel:8726705475"><i className="fas fa-phone"> </i>+91 8726705475</a>
          </div>
          <div className="ContactItems">
            <i>Mail Us: </i><br />
            <a className="contact" href="mailto:prdentalcareofficial@gmail.com"><i className="fas fa-envelope"> </i>prdentalcareofficial@gmail.com</a>
          </div>
          {/* <div className="MenuItems" id="Appointment_menu">
            <HashLink to="/dental-clinic/slot" onClick={closeMobileMenu}>
              <div className="Appointment"><i className="fas fa-calendar-alt"></i>Book An Appointment</div>
            </HashLink>
          </div> */}
        </div>
        {/* <div className="MenuItems">
          <div className="user">
            <i className="fas fa-user-circle fa-lg"></i>
          </div>
          <HashLink to="/register" onClick={closeMobileMenu}>
            Register
          </HashLink>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;

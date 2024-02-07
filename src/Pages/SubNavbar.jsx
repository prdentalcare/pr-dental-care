import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import 'font-awesome/css/font-awesome.min.css';
import './SubNavbar.css';
const SubNavbar = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  const closeMobileMenu = () => {
    setActive(false);
  };
  return (
    <>
      <div className="sub-nav-container">
        <div className={isActive ? 'active_links' : 'links'}>
          <div className="SubMenuItems">
            <HashLink to="/#home" onClick={closeMobileMenu}>
              <i class="fa-solid fa-house-medical"></i>
              <span>Home</span>
            </HashLink>
          </div>
          <div className="SubMenuItems">
            <HashLink to="/#about-us" onClick={closeMobileMenu}>
              <i class="fa-solid fa-suitcase-medical"></i>
              <span>About</span>
            </HashLink>
          </div>
          <div className="SubMenuItems">
            <HashLink to="/#our-services" onClick={closeMobileMenu}>
              <i class="fa-solid fa-hand-holding-medical"></i>
              <span>Services</span>
            </HashLink>
          </div>
          {/* <div className="SubMenuItems">
            <HashLink to="/#facilities" onClick={closeMobileMenu}>
              Facilities
            </HashLink>
          </div>
          <div className="SubMenuItems">
            <HashLink to="/#safety-quality" onClick={closeMobileMenu}>
              Safety & Quality
            </HashLink>
          </div>
          <div className="SubMenuItems">
            <HashLink to="/#post-operative-instructions" onClick={closeMobileMenu}>
              Post-Operative Instructions
            </HashLink>
          </div>
          <div className="SubMenuItems">
            <HashLink to="/#faqs" onClick={closeMobileMenu}>
              FAQs
            </HashLink>
          </div> */}
          <div className="SubMenuItems">
            <HashLink to="/#contact-us" onClick={closeMobileMenu}>
              <i class="fa-solid fa-comment-medical fa-flip-horizontal"></i>
              <span>Contact Us</span>              
            </HashLink>
          </div>
        </div>
        <div className="toggle_menu_icons" onClick={handleClick}>
          <i className={isActive ? 'fas fa-times fa-xl' : 'fas fa-bars fa-xl'}></i>
        </div>
      </div>
    </>
  );
};

export default SubNavbar;

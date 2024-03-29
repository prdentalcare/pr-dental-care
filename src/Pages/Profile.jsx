import React, { useEffect } from "react";
import profile_one_img from "./images/doc.jpg";
// import profile_two_img from "./images/Profile_images/female_profile_img.png";
import "./Profile.css";
const Profile = () => {
  const profile_details = [
    {
      id: 1,
      photo: profile_one_img,
      name: "Dr. Rani",
      occupation: "Dental Surgeon BDS",
      description:
        "Dr. Rani is a highly skilled dentist with over three years of experience. She has worked in Hyderabad, Gorakhpur, and Jhansi under experienced professionals, excelling in all aspects of dental procedures. Graduated as the top student in her dental college every year, She is dedicated to provide exceptional care to her patients, leveraging her expertise and commitment to excellence in every treatment she performs. Known for her quality work and patience, She ensures that each patient receives personalized attention and compassionate care throughout their dental journey.",
    },
    /* {
      id: 2,
      photo: profile_two_img,
      name: "Dr.Komal Achare",
      occupation: "Dental Surgeon BDS",
      description:
        "Dr. Rani is a talented dentist with over three years of experience. She worked in Hyderabad, Gorakhpur, and Jhansi under experienced mentors. Dr. Rani was the top student in her dental college every year, showing her dedication and skill. She's known for doing excellent work and being patient with her patients. She's committed to giving each person personalized care and making their dental experience comfortable.",
    }, */
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      // Custom logic to handle the refresh
      // Display a confirmation message or perform necessary actions
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <section>
        <div className="profile_section_container">
          <h2>
            <span>
              <i className="fa-solid fa-caret-right"></i>
            </span>
            Meet Our Doctor
          </h2>
          <div className="p_info_container">
            {profile_details.map((e, index) => (
              <div className="profile_details" key={index}>
                <img src={e.photo} alt="profile_image" />
                <div className="profile_info">
                  <h3 className="profile_name">{e.name}</h3>
                  <h4 className="profile_occupation">{e.occupation}</h4>
                </div>
                <p className="profile_description">&emsp;&ensp;{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

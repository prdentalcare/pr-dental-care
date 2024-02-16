import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // const accountId = 6863843904533027053;
    // const locationId=;
    // const placeId='ChIJWeK1xW_vDDkRN7NoSnM6auA';
    // const apiKey = 'AIzaSyBr6NfViI3IlpQEyli9Ev6B6jg3OYGpqZ4';
    const fetchReviews = async () => {
      try {
        // Fetch Google reviews from your API or directly from Google Places API
        // const response = await fetch(`https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`);
        // const data = await response.json();
        // console.log(data)
        const data = {reviews: [{text:'test1', author_name:'testing1'}, {text:'test2', author_name:'testing2'}]}
        setReviews(data.reviews); // Assuming reviews are stored under 'reviews' key in the response
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <h2 style={{ fontFamily: 'Poppins' }}>
            <span>
              <i className="fa-solid fa-caret-right"></i>
            </span>
            Testimonials
          </h2>
          <div className="testimonials-container">
            {reviews.map((review, index) => (
              <div key={index} className="testimonial">
                <p>{review.text}</p>
                <p>- {review.author_name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

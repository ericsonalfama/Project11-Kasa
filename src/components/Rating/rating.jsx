import React from "react";
import PropTypes from 'prop-types';
import { BsFillStarFill } from "react-icons/bs";
import './rating.scss';

function Stars({ rating }) {
    const totalStars = 5;
  
    return (
      <div className="stars-container">
        {[...Array(totalStars)].map((_, index) => (
          <BsFillStarFill
            key={index}
            className={index < rating ? 'full-star' : 'empty-star'}
          />
        ))}
      </div>
    );
  }
  
  Stars.propTypes = {
    rating: PropTypes.number.isRequired,
  };
  
  export default Stars;

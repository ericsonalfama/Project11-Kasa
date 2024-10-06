import React, { useState, useEffect, useRef } from 'react';
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import PropTypes from 'prop-types';
import './Caroussel.scss';

function Caroussel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 5000); // 3 segundos
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    startInterval();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    startInterval();
  };

  useEffect(() => {
    // Set up the interval for automatic slideshow
    startInterval();
    return () => {
      clearInterval(intervalRef.current);
    };
  });


  return (
    <div className="caroussel">
      {pictures.map((picture, index) => (
          <img
          key={index}
          src={picture}
          alt={`Caroussel ${index}`}
          className={`caroussel-image ${currentIndex === index ? 'active' : ''}`}
          />
        ))}
      <button className="caroussel-button prev-button" onClick={handlePrev}>
        <i>
            <VscChevronLeft/>
        </i>
      </button>
      <button className="caroussel-button next-button" onClick={handleNext}>
        <i>
            <VscChevronRight/>
        </i>
      </button>
      <div className="caroussel-counter">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}

Caroussel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Caroussel;
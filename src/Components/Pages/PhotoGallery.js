import React, { useState } from 'react';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { id: 1, imgSrc: 'https://picsum.photos/2000/1000', alt: 'Slide 1' },
    { id: 2, imgSrc: 'https://picsum.photos/2000/1001', alt: 'Slide 2' },
    { id: 3, imgSrc: 'https://picsum.photos/2000/1002', alt: 'Slide 3' },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
        >
          <img src={slide.imgSrc} alt={slide.alt} />
        </div>
      ))}
      <div className="carousel-controls">
        <span className="carousel-arrow" onClick={handlePrev}>
          &#10094;
        </span>
        <span className="carousel-arrow" onClick={handleNext}>
          &#10095;
        </span>
      </div>
    </div>
  );
};

export default PhotoGallery;

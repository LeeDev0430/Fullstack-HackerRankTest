import React, { useState } from 'react';

function Slides({ slides }) {
  // State to keep track of the current slide index
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Event handlers
  const goToNextSlide = () => {
    setCurrentSlideIndex(currentSlideIndex + 1);
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex(currentSlideIndex - 1);
  };

  const restartSlides = () => {
    setCurrentSlideIndex(0);
  };

  // Determine if next and prev buttons should be disabled
  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === slides.length - 1;

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={restartSlides}
          disabled={isFirstSlide}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={goToPrevSlide}
          disabled={isFirstSlide}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={goToNextSlide}
          disabled={isLastSlide}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentSlideIndex].title}</h1>
        <p data-testid="text">{slides[currentSlideIndex].text}</p>
      </div>
    </div>
  );
}

export default Slides;

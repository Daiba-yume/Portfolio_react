"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

function WorkSliderBtns({ containerStyles, btnStyles, iconsStyles }) {
  const swiper = useSwiper();

  // Vérifier si swiper est initialisé avant d'appeler ses méthodes
  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={handlePrev}
        aria-label="button prev"
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={btnStyles}
        onClick={handleNext}
        aria-label="button next"
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
}

export default WorkSliderBtns;

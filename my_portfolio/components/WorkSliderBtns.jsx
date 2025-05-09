"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

function WorkSliderBtns({ containerStyles, btnStyles, iconsStyles }) {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
        aria-label="button prev"
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={btnStyles}
        onClick={() => swiper.slideNext()}
        aria-label="button next"
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
}

export default WorkSliderBtns;

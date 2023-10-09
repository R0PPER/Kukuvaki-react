import React from 'react';
import { useSwiper } from 'swiper/react';

export const MySwiperBtns = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev(100)}>Prev</button>
      <button onClick={() => swiper.slideNext(100)}>Next</button>
    </div>
  );
};


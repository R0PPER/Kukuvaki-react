import React, { useState } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { MySwiperBtns } from '../components/MySwiperBtns';

import 'swiper/css/pagination';
import 'swiper/css';
import '../../css/homeCss/swiper.css';

import { Slide } from "react-awesome-reveal";


export const MySwiper = () => {

  return (
    <>
    <Slide duration={1500} triggerOnce>
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={5}
          navigation
          scrollbar={{ draggable: true }}
          // onSlideChange={(swiper: any) => { // Specify the type as 'any'
          //   handleSlideChange(swiper);
          // }}
        >
          {Array(7)
            .fill('')
            .map((_, index) => (
              <SwiperSlide
                key={index}
                className='res-slide'
                // className={`res-slide ${
                //   activeSlideIndex === index ? 'active' : ''
                // }`}
              >
              <div className="overlay">
                  <div>Additional Content</div> {/* Add the content you want to display */}
              </div>
                {/* {({ isActive }) => (
                  <div>Current slide is {isActive ? 'active' : 'not active'}</div>
                )} */}
              </SwiperSlide>
            ))}
          {/* <MySwiperBtns /> */}
        </Swiper>
      </div>
      </Slide>
    </>
  );
};

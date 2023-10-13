import image from "../../images/mushroom.jpg";
import image1 from "../../images/mushroom1.jpg";
import image2 from "../../images/mushroom2.jpg";
import image3 from "../../images/mushroom3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import "../../css/homeCss/homecarousel.css";


import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay, Keyboard  } from "swiper/modules";

interface Swiper {
    swiper: any;
}

export default function HomeCarousel() {
    
  return (
    <>
      <Swiper style={{zIndex:1 , width: "100%" , height: "100%", cursor: "auto"}}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay, Keyboard]}
      //   spaceBetween={50}
        slidesPerView={1}
      //   navigation
      //   scrollbar={{ draggable: true }}
        autoplay={{ delay: 9000 }}
      //   keyboard={{ enabled: true }}
        effect="fade" 
        speed={3000}
        allowTouchMove={false}
      >
        <SwiperSlide><img src={image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
        
      </Swiper>

        {/* <div className="shape-container">
          <div className="triangle-down"></div>
        </div> */}

      </>
  );
}

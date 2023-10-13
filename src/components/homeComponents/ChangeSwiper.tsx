import { useState, useEffect } from "react";
import { MySwiper } from "../homeComponents/MySwiper";
import { MySwiper2 } from "../homeComponents/MySwiper2";

import "../../css/homeCss/swiper.css";

export default function ChangeSwiper() {
  const [activeSwiper, setActiveSwiper] = useState(true);
  const [btnEffect, setBtnEffect] = useState("onClick");

  const handleSliderChange = () => {
    setActiveSwiper(!activeSwiper);
  };

  return (
    <>
      <div>
        {activeSwiper ? <MySwiper2 /> : <MySwiper />}
      </div>

      <button
        className={`swiperBtn ${btnEffect}`}
        onClick={() => {
          handleSliderChange();
          setBtnEffect("rotate");
          setTimeout(() => {
            setBtnEffect("onClick");
          }, 900); 
        }}
      >
        {activeSwiper ? "Wild Srooms" : "Home Mushrooms"}
      </button>
    </>
  );
}

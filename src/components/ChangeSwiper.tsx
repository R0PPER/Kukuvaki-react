import { useState } from "react"
import { MySwiper} from "../components/MySwiper"
import { MySwiper2 } from "../components/MySwiper2"

import "..//css/swiper.css"




export default function ChangeSwiper() {
    const [activeSwiper, setActiveSwiper] = useState (true);

    const handleSliderChange = () => {
        setActiveSwiper(!activeSwiper);
        {activeSwiper ? console.log('Swiper1 is active') : console.log('Swiper2 is active')}
    }

    
    
        return (
            <>
            <div>
              {/* Pass the activeSwiper state as a prop to MySwiper2 */}
              {activeSwiper ? <MySwiper2  /> : <MySwiper />}
            </div>

            <button className="swiperBtn" onClick={handleSliderChange}>
              {activeSwiper ? "Wild Srooms" : "Home Mushrooms"}
            </button>
          </>

        )
    

}
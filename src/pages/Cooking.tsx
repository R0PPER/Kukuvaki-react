import FixedIcons from "../components/SocialIcons";
import ScrollToTop from "../components/btn-toTop";

import "../css/cookingCss/cookingPage.css";
import image from "../images/sympols.jpg";

export default function Cooking() {
  return (
    <div className="cooking">
      <div className="shapes-container">
        <img src={image} alt="" />
        
        <div className="cooking-video">
          <div className="border-1">
            <div className="border-2">
              <video
                src={require("../video/cooking.mp4")}
                autoPlay={true}
                // controls
                // muted
                loop
              ></video>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <FixedIcons />
        <ScrollToTop />
      </div>
    </div>
  );
}

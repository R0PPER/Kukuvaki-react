import image from "../images/mushroom.jpg";
// import image1 from "../images/logo1.png";

import "../css/homeCss/home.css";
import ChangeSwiper from "../components/homeComponents/ChangeSwiper"
import FixedIcons from "../components/SocialIcons";
import ScrollToTop from "../components/btn-toTop";
import HomeCarousel from "../components/homeComponents/HomeCarousel";




export default function Home() {


    return (
        <div className="home">
            <div className="upper-slider">
                    {/* <img src={image} alt="" /> */}
                    <HomeCarousel />
            </div>

            <div className="container">
                <FixedIcons />
                <ScrollToTop />
                <div className="mushroom-cyrcle">
                    <div className="mushroom-cyrcle-mainTitle">
                        <h1>Κυκλος ζωης μανιταριων</h1>
                    </div>
                    
                    <div className="border"></div>
                    <div className="first-stage">
                        <div className="first-third-Image">
                            <img src= {image} alt="" />
                        </div>
                        <div>
                            <h1>Σταδιο ταδε του μανιταριου</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem ipsum id a qui facilis soluta corrupti quaerat maxime accusantium repellendus sequi rem iusto vitae unde commodi, ratione rerum culpa eaque possimus animi! Voluptatum repellat fugit dolores? Dignissimos sint quisquam cumque maxime impedit commodi neque! Cum corrupti distinctio aut quaerat doloremque illum iusto dolorum rem ea blanditiis? Ipsa suscipit nam ullam reprehenderit nisi? Necessitatibus voluptatum ipsa maxime, maiores quaerat temporibus. Quidem beatae corrupti nesciunt voluptatum velit! Labore eius optio est nam architecto, deserunt quidem! Alias laborum consequuntur maiores ratione nam? Earum illo labore eaque, praesentium accusantium repellat vitae doloremque eos!

                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="border"></div>


                    <div className="second-stage">
                        <div>
                            <h1>Σταδιο ταδε του μανιταριου</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem ipsum id a qui facilis soluta corrupti quaerat maxime accusantium repellendus sequi rem iusto vitae unde commodi, ratione rerum culpa eaque possimus animi! Voluptatum repellat fugit dolores? Dignissimos sint quisquam cumque maxime impedit commodi neque! Cum corrupti distinctio aut quaerat doloremque illum iusto dolorum rem ea blanditiis? Ipsa suscipit nam ullam reprehenderit nisi? Necessitatibus voluptatum ipsa maxime, maiores quaerat temporibus. Quidem beatae corrupti nesciunt voluptatum velit! Labore eius optio est nam architecto, deserunt quidem! Alias laborum consequuntur maiores ratione nam? Earum illo labore eaque, praesentium accusantium repellat vitae doloremque eos!
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </p>
                        </div>
                        <div>
                            <img src= {image} alt="" />
                        </div>
                    </div>
                    <div className="border"></div>


                    <div className="third-stage">
                        
                        <div className="first-third-Image">
                            <img src= {image} alt="" />
                        </div>
                        <div>
                            <h1>Σταδιο ταδε του μανιταριου</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem ipsum id a qui facilis soluta corrupti quaerat maxime accusantium repellendus sequi rem iusto vitae unde commodi, ratione rerum culpa eaque possimus animi! Voluptatum repellat fugit dolores? Dignissimos sint quisquam cumque maxime impedit commodi neque! Cum corrupti distinctio aut quaerat doloremque illum iusto dolorum rem ea blanditiis? Ipsa suscipit nam ullam reprehenderit nisi? Necessitatibus voluptatum ipsa maxime, maiores quaerat temporibus. Quidem beatae corrupti nesciunt voluptatum velit! Labore eius optio est nam architecto, deserunt quidem! Alias laborum consequuntur maiores ratione nam? Earum illo labore eaque, praesentium accusantium repellat vitae doloremque eos!

                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="border"></div>                   
                </div>

                    <div className="home-mushrooms-slider">                     
                        <ChangeSwiper />     
                    </div>

                    
            </div>           
        </div>
    )
}
import  {FaFacebook, FaInstagram, FaTwitter, FaLinkedin,  }  from "react-icons/fa";
import "../css/social.css";

function FixedIcons() {
    return (

        <div className="social">
            <div className="border"></div>
        <ul>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaTwitter /></li>
            <li><FaLinkedin /></li>
        </ul>
        <div className="border"></div>

    </div>
    )

}

export default FixedIcons;



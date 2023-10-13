import "../css/footer.css";
import image from "../images/logo1.png";
import { NavLink } from "react-router-dom";

import { FaHome, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="footer">
      
      <div className="shape-container">
        <div className="triangle-down"></div>
      </div>
      
      <div className="footer-container">
        <div className="logo-name">
          <div className="logo">
            <img src={image} alt="" />
          </div>

          <div className="name">
            <h3>Kukuvaki Project</h3>
          </div>
        </div>

        <div className="links">
          <NavLink to="/" className={"footer-link"}>
            Home
          </NavLink>
          <NavLink to="/informations" className={"footer-link"}>
            Info
          </NavLink>
          <NavLink to="/newslatter" className={"footer-link"}>
            Newsletter
          </NavLink>
          <NavLink to="/cooking" className={"footer-link"}>
            Cooking
          </NavLink>
          <NavLink to="/contact" className={"footer-link"}>
            Contact
          </NavLink>
        </div>

        <div className="company-informations">
          {/* <h3>Στοιχεία Εταιρειας</h3> */}
          <ul>
            <li>
              <FaHome /> Καπαδοκίας 13, Δραμα
            </li>
            <li>
              <FaPhone /> +30 6978804100
            </li>
            <li>
              {" "}
              <FaEnvelope /> m4Mq9@example.com
            </li>
            <li>
              <FaGlobe /> www.kukuvaki.com
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        © 2020 Copyright: 
        <a className="text-white" href="https://mdbootstrap.com/">
           TaQifsaQurven.com
        </a>
      </div>

    </div>
  );
}

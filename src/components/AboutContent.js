import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.webp";
import { Link } from "react-router-dom";

export function AboutContent() {
  return (
    <>
      <div className="about-page">
        <div className="about-content">
          <h1 className="about-heading">Who Am I?</h1>
          <p className="about-text">
            I am a react Front-end developer. I create responsive secure website
            for my clients.
          </p>
          <Link to="/contact" className="btn btn-dark">
            Contact
          </Link>
        </div>
        <div>
          <img src={react2} className="react-img2" />
          <img src={react1} className="react-img" />
        </div>
      </div>
    </>
  );
}

import img1 from "../assets/img1.jpg";
import { Link } from "react-router-dom";

export function HeroImg() {
  return (
    <>
      <div className="Hero">
        <div className="mask">
          <img className="intro-img" src={img1} />
        </div>

        <div className="content">
          <p className="name">Hi, I am Umer Hameed!</p>
          <h1 className="dev-heading">Frontend Developer.</h1>
          <div className="buttons">
            <Link to="/project" className="btn btn-dark btn-project">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-light btn-con">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

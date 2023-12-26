import img3 from "../assets/img3.jpg";

export function AboutImg() {
  return (
    <>
      <div className="hero-pro">
        <div className="mask-project">
          <img className="project-img" src={img3} />
        </div>
        <div className="content-project">
          <h1 className="pro-name">ABOUT.</h1>
          <p className="pro-p">I am a friendly Front-End Developer</p>
        </div>
      </div>
    </>
  );
}

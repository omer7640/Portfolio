import img3 from "../assets/img3.jpg";

export function HeroProjectImg() {
  return (
    <>
      <div className="hero-pro">
        <div className="mask-project">
          <img className="project-img" src={img3} />
        </div>
        <div className="content-project">
          <h1 className="pro-name">PROJECTS.</h1>
          <p className="pro-p">Some of my most recent works</p>
        </div>
      </div>
    </>
  );
}

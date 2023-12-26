import img3 from "../assets/img3.jpg";

export function ContactImg() {
  return (
    <>
      <div className="hero-pro">
        <div className="mask-project">
          <img className="project-img" src={img3} />
        </div>
        <div className="content-project">
          <h1 className="pro-name">CONTACT.</h1>
          <p className="pro-p">Lets have a chat</p>
        </div>
      </div>
    </>
  );
}

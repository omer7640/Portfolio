import img2 from "../assets/img2.jpg";

export function Hero2() {
  return (
    <>
      <div className="hero2">
        <h1 className="heading-responsive">
          "One Site, Many Devices: Embracing Responsive Web Design"
        </h1>
        <div className="hero2-box">
          <div className="mask2">
            <img className="hero2-img" src={img2}></img>
          </div>
          <div>
            <h2 className="hero2-content">
              I Make Responsive Websites Using{" "}
              <span className="color-change">HTML,CSS</span> and{" "}
              <span className="color-change">JAVASCRIPT</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

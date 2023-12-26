import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

export function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <div>
                <p>57-E Marghazar colony Lahore.</p>
                <p>Pakistan</p>
              </div>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                03004201482
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                omerhameed.255@gmail.com
              </h4>
            </div>
          </div>
          <div className="right">
            <h3>You can find me on</h3>
            <div className="social">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

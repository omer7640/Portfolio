import { useState } from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/">
            <h2 className="navbar-brand" href="#">
              PortFolio
            </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/project">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">
                  <a
                    className="nav-link disabled"
                    aria-disabled="true"
                    href="#"
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

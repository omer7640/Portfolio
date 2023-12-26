import { NavBar } from "../components/Navbar";
import { AboutImg } from "../components/AboutImg.js";
import { AboutContent } from "../components/AboutContent.js";
import { Footer } from "../components/Footer";

export function About() {
  return (
    <>
      <div>
        <NavBar />
        <AboutImg />
        <AboutContent />
        <Footer />
      </div>
    </>
  );
}

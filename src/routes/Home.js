import { HeroImg } from "../components/HeroImg";
import { NavBar } from "../components/Navbar";
import { Hero2 } from "../components/Hero2";
import { Hero3 } from "../components/Hero3";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div>
      <NavBar />
      <HeroImg />
      <Hero2 />
      <hr></hr>
      <Hero3 />
      <Footer />
    </div>
  );
}

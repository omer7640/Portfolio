import { NavBar } from "../components/Navbar";
import { HeroProjectImg } from "../components/HeroProjectImg";
import { HeroProjectCard } from "../components/HeroProjectCard";

import { Footer } from "../components/Footer";

export function Project() {
  return (
    <>
      <div>
        <NavBar />
        <HeroProjectImg />
        <HeroProjectCard />
        <Footer />
      </div>
    </>
  );
}

import "./App.css";
import "./index.css";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Project } from "./routes/Project";
import { Contact } from "./routes/Contact";

import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;

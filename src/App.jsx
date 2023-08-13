import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/Footer/FooterBottom";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const dark = darkMode
    ? "dark w-full h-auto bg-bodyColor text-lightText"
    : "w-full h-auto";
  return (
    <div className={dark}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="max-w-screen-xl  mx-auto px-4">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;

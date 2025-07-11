import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import Hero from "./components/Hero";
import InfoCards from "./components/InfoCards";
import Features from "./components/Features";
import LogoSliders from "./components/LogoSliders";
import Corporis from "./components/Corporis";
import UnleashingPotential from "./components/UnleashingPotential";
import Neque from "./components/Neque";
import Services from "./components/Services";
import Enimquis from "./components/Enimquis";
import Pricing from "./components/Pricing";
import Frequently from "./components/Frequently";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black-500 border-solid"></div>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <InfoCards />
      <UnleashingPotential />
      <LogoSliders />
      <Features />
      <Corporis />
      <Neque />
      <Services />
      <Enimquis />
      <Pricing />
      <Frequently />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

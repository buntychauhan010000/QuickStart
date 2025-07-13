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
import Faqs from "./components/Faqs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import FullScreenLoader from "./components/common/FullScreenLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 500, once: true });

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

 if (loading) {
   return <FullScreenLoader />;
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
      <Faqs />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;

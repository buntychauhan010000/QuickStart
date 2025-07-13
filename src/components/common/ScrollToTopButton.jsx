import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // Optional icon

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="sm:fixed hidden sm:flex bottom-4 right-4 p-3 bg-primary text-white rounded-full shadow-lg  transition"
        aria-label="Scroll to Top"
      >
        <FaArrowUp />
      </button>
    )
  );
}
export default ScrollToTopButton;
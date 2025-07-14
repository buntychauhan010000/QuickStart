import PrimaryButton from "./PrimaryButton";
import { FaRegCirclePlay } from "react-icons/fa6";
import hero from "../assets/img/hero.webp";

function Welcome() {
  return (
    <div id="home" className="container mx-auto px-3 pt-24">
      <div className="flex justify-center sm:items-center mt-5 sm:mt-10 ">
        <div className="text-center">
          {/* Heading */}
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-5xl  font-nunito font-bold text-secondary"
          >
            Welcome to <span className="text-primary">QuickStart</span>
          </h1>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            className="text-secondary-lite mt-3 mb-6 text-base sm:text-xl"
          >
            Quickly start your project now and set the stage for success
          </p>

          {/* Buttons: Get Started & Watch Video */}
          <div data-aos="fade-up" className="flex justify-center gap-5">
            <PrimaryButton
              label={"Get Started"}
              className="bg-primary text-white text-base font-nunito  py-1 px-4 sm:py-2.5 sm:px-7 rounded-full"
            />

            <a
              href="https://youtu.be/Y7f98aduVJ8?si=-QlOnMiNntKW4449"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRegCirclePlay className="text-3xl text-primary" />
              <span className="text-lg font-medium text-secondary hover:text-primary transition">
                Watch Video
              </span>
            </a>
          </div>

          {/* Hero Image */}
          <img
            data-aos="zoom-out"
            className=" w-4/5 md:w-3/5 lg:w-1/2 xl:w-3/5  mx-auto mt-8"
            src={hero}
            alt="Hero section visual"
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;

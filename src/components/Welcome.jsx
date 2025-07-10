import PrimaryButton from "./PrimaryButton";
import { FaRegCirclePlay } from "react-icons/fa6";
import hero from "../assets/img/hero.webp";

function Welcome() {
  return (
    <div id="home" className="container mx-auto px-3 pt-24">
      <div className="flex justify-center mt-20 sm:mt-1 sm:items-center sm:h-screen">
        <div className="text-center">
          <h1 className="text-2xl sm:text-5xl font-bold font-nunito text-secondary">
            Welcome to <span className="text-primary">QuickStart</span>
          </h1>
          <p className="text-secondary-lite mt-2 mb-6 text-base sm:text-xl">
            Quickly start your project now and set the stage for success
          </p>
          <div className="flex justify-center gap-5">
            <PrimaryButton
              label={"Get Started"}
              className="bg-primary text-white text-base font-nunito py-1 px-4 sm:py-2.5 sm:px-7 rounded-full"
            />
            <a
              href="https://youtu.be/Y7f98aduVJ8?si=-QlOnMiNntKW4449"
              className="flex items-center gap-2"
              target="_blank"
            >
              <FaRegCirclePlay className="text-3xl text-primary" />
              <span className="text-lg font-medium text-secondary hover:text-primary transition">
                Watch Video
              </span>
            </a>
          </div>
          <img className="w-4/5 lg:w-3/5 mx-auto" src={hero} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;

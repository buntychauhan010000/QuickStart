import mobilecamara from "../assets/img/mobilecamara.jpg";
import EnimquisItems from "./common/EnimquisItems";

function Enimquis() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Responsive layout: Text left, Image right (on large screens) */}
      <div className="flex justify-between gap-3 items-center flex-col-reverse md:flex-row">
        {/* Left Column: Text Content */}
        <article className="md:w-1/2 lg:pr-4 mt-4 lg:mt-0 space-y-3 md:space-y-1 lg:space-y-3">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl sm:text-2xl md:text-xl lg:text-2xl text-secondary font-nunito font-bold "
          >
            Enim quis est voluptatibus aliquid consequatur
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="105"
            className="text-secondary text-sm sm:text-base md:text-sm lg:text-base "
          >
            Esse voluptas cumque vel exercitationem. Reiciendis est hic
            accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
            voluptate sed facere corporis dolores excepturi
          </p>

          {/* Features List */}
          <div className="grid sm:grid-cols-2 gap-2 lg:gap-4 ">
            <EnimquisItems />
          </div>
        </article>

        {/* Right Column: Image */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="md:w-1/2 lg:pl-4"
        >
          <img src={mobilecamara} alt="Mobile Camera" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Enimquis;

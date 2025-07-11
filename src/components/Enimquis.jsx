import mobilecamara from "../assets/img/mobilecamara.jpg";
import { enimquisdata } from "./common/helper";

function Enimquis() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Responsive layout: Text left, Image right (on large screens) */}
      <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
        {/* Left Column: Text Content */}
        <article className="lg:w-1/2 lg:pr-4 mt-4 lg:mt-0">
          <h2 className="text-2xl text-secondary font-bold mb-4">
            Enim quis est voluptatibus aliquid consequatur
          </h2>
          <p className="text-secondary">
            Esse voluptas cumque vel exercitationem. Reiciendis est hic
            accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
            voluptate sed facere corporis dolores excepturi
          </p>

          {/* Features List */}
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {enimquisdata.map((item, index) => (
              <div
                key={index}
                className="flex items-start py-4 bg-white rounded-lg"
              >
                <div className="text-primary text-2xl mt-2 mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg text-secondary mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Right Column: Image */}
        <div className="lg:w-1/2 lg:pl-4">
          <img src={mobilecamara} alt="Mobile Camera" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Enimquis;

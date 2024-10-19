import img1 from "../../assets/icons/group.svg";
import img2 from "../../assets/icons/person.svg";
import img3 from "../../assets/icons/Wrench.svg";
import img4 from "../../assets/icons/deliveryt.svg";
import img5 from "../../assets/icons/check.svg";
import { FaClock } from "react-icons/fa";

const CoreFeature = () => {
  return (
    <div className="my-16">
      <div className="text-center space-y-4">
        <p className="text-xl font-bold">Service</p>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p className="w-[550px] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>

      {/* feature container */}
      <div className="flex gap-10 justify-center mt-16">
        <div className="shadow-lg border rounded-lg p-5">
          <img className="mx-auto" src={img1} />
          <h2 className="font-bold mt-4">Expert Team</h2>
        </div>
        <div className="shadow-lg border rounded-lg p-5">
          <FaClock className="text-6xl mx-auto" />
          <h2 className="font-bold mt-4">Timely Delivery</h2>
        </div>
        <div className="shadow-lg border rounded-lg p-5">
          <img className="mx-auto" src={img4} />
          <h2 className="font-bold mt-4">Timely Delivery</h2>
        </div>
        <div className="shadow-lg border rounded-lg p-5">
          <img className="mx-auto" src={img2} />
          <h2 className="font-bold mt-4">24/7 Support</h2>
        </div>
        <div className="shadow-lg border rounded-lg p-5">
          <img className="mx-auto" src={img3} />
          <h2 className="font-bold mt-4">Best Equipment</h2>
        </div>
        <div className="shadow-lg border rounded-lg p-5">
          <img className="mx-auto" src={img5} />
          <h2 className="font-bold mt-4">100% Guranty</h2>
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;

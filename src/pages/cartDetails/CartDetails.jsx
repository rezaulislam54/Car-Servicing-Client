import { useLoaderData } from "react-router-dom";
import img1 from "../../assets/images/checkout/checkout.png";
import { GoArrowRight } from "react-icons/go";

const CartDetails = () => {
  const style = {
    backgroundColor: "red",
    clipPath: "polygon(14% 86%, 84% 86%, 94% 100%, 5% 100%)",
  };

  const service = useLoaderData();

  const { title, img, price, description, facility } = service;

  return (
    <div>
      <div className=" w-full rounded-lg relative ">
        <img src={img1} className="w-full rounded-lg" />
        <div className="absolute top-0 left-0 rounded-lg w-full h-full text-start flex items-center  bg-gradient-to-r from-[#151515CC] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white md:w-1/2 lg:pl-12 md:pl-20 pl-5">
            <h2 className="text-4xl md:text-5xl  font-bold">Service Details</h2>
          </div>
          <h2 className=" absolute bottom-4 -translate-x-1/2 left-1/2 z-30 text-white text-xl">
            Home/Service Details
          </h2>
          <div
            style={style}
            className="absolute bottom-0 -translate-x-1/2 h-[300px] w-[300px] left-1/2"
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 my-28 gap-6">
        <div className="md:col-span-4 space-y-4">
          <img className="rounded-lg h-[400px] w-full" src={img} />
          <h2 className="text-4xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>

        <div className="md:col-span-2">
          <div className="bg-[#F3F3F3] rounded-lg md:p-5 p-8 lg:p-8 space-y-3 border">
            <h2 className="text-2xl font-bold">Services</h2>

            <button className=" font-bold text-[#FF497C] flex justify-between items-center w-full cursor-pointer hover:bg-[#FF497C] rounded-lg py-3 px-6 bg-white hover:text-white duration-200">
              Full Car Repair
              <GoArrowRight className="text-2xl font-bold" />
            </button>
            <button className=" font-bold text-[#FF497C] flex justify-between items-center w-full cursor-pointer hover:bg-[#FF497C] rounded-lg py-3 px-6 bg-white hover:text-white duration-200">
              Engine Repair
              <GoArrowRight className="text-2xl font-bold" />
            </button>
            <button className=" font-bold text-[#FF497C] flex justify-between items-center w-full cursor-pointer hover:bg-[#FF497C] rounded-lg py-3 px-6 bg-white hover:text-white duration-200">
              Automatic Services
              <GoArrowRight className="text-2xl font-bold" />
            </button>
            <button className=" font-bold text-[#FF497C] flex justify-between items-center w-full cursor-pointer hover:bg-[#FF497C] rounded-lg py-3 px-6 bg-white hover:text-white duration-200">
              Engine Oil Change
              <GoArrowRight className="text-2xl font-bold" />
            </button>
            <button className=" font-bold text-[#FF497C] flex justify-between items-center w-full cursor-pointer hover:bg-[#FF497C] rounded-lg py-3 px-6 bg-white hover:text-white duration-200">
              Battery Charge
              <GoArrowRight className="text-2xl font-bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

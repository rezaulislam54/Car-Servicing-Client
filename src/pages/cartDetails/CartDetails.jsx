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
    <div className="my-10">
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

      {/* service container */}
      <div className="grid grid-cols-1 md:grid-cols-6 my-28 gap-6">
        {/* Left side of the */}
        <div className="md:col-span-4 space-y-6">
          <img className="rounded-lg h-[400px] w-full" src={img} />
          <h2 className="text-4xl font-bold">{title}</h2>
          <p>{description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facility.map((item, index) => (
              <div
                className="bg-[#F3F3F3] border-t-2 border-[#ff3911] rounded-lg space-y-2 p-10"
                key={index}
              >
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p>{item.details}</p>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-[#151515]">
            3 Simple Steps to Process
          </h2>
          <p>{description}</p>

          <div className="flex gap-5 justify-evenly">
            <div className="text-center flex flex-col items-center space-y-2 border-2 shadow-md rounded-lg p-5 border-[#ff3911]">
              <h2 className="rounded-full h-20 w-20 p-3 bg-[#ff38111a]">
                <p className="bg-[#FF3811] text-white p-4 text-xl rounded-full">
                  01
                </p>
              </h2>
              <h2 className="text-xl font-bold">Step One</h2>
              <p>
                It uses a dictionary <br /> of over 200 .
              </p>
            </div>
            <div className="text-center flex flex-col items-center space-y-2 border-2 shadow-md rounded-lg p-5 border-[#ff3911]">
              <h2 className="rounded-full h-20 w-20 p-3 bg-[#ff38111a]">
                <p className="bg-[#FF3811] text-white p-4 text-xl rounded-full">
                  01
                </p>
              </h2>
              <h2 className="text-xl font-bold">Step One</h2>
              <p>
                It uses a dictionary <br /> of over 200 .
              </p>
            </div>
            <div className="text-center flex flex-col items-center space-y-2 border-2 shadow-md rounded-lg p-5 border-[#ff3911]">
              <h2 className="rounded-full h-20 w-20 p-3 bg-[#ff38111a]">
                <p className="bg-[#FF3811] text-white p-4 text-xl rounded-full">
                  01
                </p>
              </h2>
              <h2 className="text-xl font-bold">Step One</h2>
              <p>
                It uses a dictionary <br /> of over 200 .
              </p>
            </div>
          </div>
        </div>

        {/* Right side of the */}
        <div className="md:col-span-2 space-y-6">
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

          {/* Download Section */}
          <div className="bg-[#151515] rounded-lg md:p-5 p-8 lg:p-8 space-y-4 border text-white mt-6">
            <h2 className="text-2xl font-bold">Download</h2>
            <div className="flex justify-between items-center border rounded-lg py-1 pl-4 pr-8">
              <div className="flex items-center gap-4">
                <img
                  src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1729265840/Frame_aa5bun.png"
                  alt=""
                />
                <h2>
                  <p className="text-[18px] font-semibold">Our Brochure</p>
                  <p className="text-gray-300">Download</p>
                </h2>
              </div>
              <GoArrowRight className="text-2xl font-bold" />
            </div>

            <div className="flex justify-between items-center border rounded-lg py-1 pl-4 pr-8">
              <div className="flex items-center gap-4">
                <img
                  src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1729265840/Frame_aa5bun.png"
                  alt=""
                />
                <h2>
                  <p className="text-[18px] font-semibold">Our Brochure</p>
                  <p className="text-gray-300">Download</p>
                </h2>
              </div>
              <GoArrowRight className="text-2xl font-bold" />
            </div>
          </div>

          {/* logo section */}
          <div className="bg-[#151515] rounded-lg py-6 space-y-4 border text-white mt-6">
            <div className="w-[160px] mx-auto text-center">
              <img
                src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1729267592/Group_2_eoqzso.png"
                alt=""
              />
              <p className="font-bold mt-3">
                Need Help? We Are Here To Help You
              </p>
            </div>
            <div className="w-[220px] text-black p-4 rounded-lg bg-white mx-auto text-center">
              <h2 className="text-xl font-bold">Car Doctor Special</h2>
              <p>Save up to 60% off</p>
              <button className="bg-[#FF497C] mt-3 rounded-md text-white font-semibold px-4 py-2">
                Get A Quote
              </button>
            </div>
          </div>
          <h2 className="text-4xl font-bold">Price: ${price}</h2>
          <button className="bg-[#FF3811] text-xl text-white w-full py-2 font-bold rounded-lg">
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const CheckOut = () => {
  const style = {
    backgroundColor: "red",
    clipPath: "polygon(14% 86%, 84% 86%, 94% 100%, 5% 100%)",
  };

  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, price, img } = service;

  const handleOrderConform = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const email = user?.email;
    const servicePrice = form.price.value;
    const order = {
      name,
      phone,
      date,
      email,
      serviceId: _id,
      title,
      servicePrice,
      img,
    };

    console.log(order);
  };

  return (
    <div>
      <div className=" w-full rounded-lg relative ">
        <img
          src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1729310772/two-men-working-car-with-hood-open_1306097-82214_cobpgk.avif"
          className="w-full h-[350px] rounded-lg"
        />
        <div className="absolute top-0 left-0 rounded-lg w-full h-full text-start flex items-center  bg-gradient-to-r from-[#151515CC] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white md:w-1/2 lg:pl-12 md:pl-20 pl-5">
            <h2 className="text-4xl md:text-5xl  font-bold">Check Out</h2>
          </div>
          <h2 className=" absolute bottom-4 -translate-x-1/2 left-1/2 z-30 text-white text-xl">
            Home/Checkout
          </h2>
          <div
            style={style}
            className="absolute bottom-0 -translate-x-1/2 h-[300px] w-[300px] left-1/2"
          ></div>
        </div>
      </div>

      {/* form section */}
      <div className="bg-[#F3F3F3] rounded-lg p-20 my-20">
        {/* <h2 className="text-xl pt-10 text-center font-bold dark:text-black">
          Add New Service
        </h2> */}
        <form onSubmit={handleOrderConform}>
          <div className="md:flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder=" Enter Your Name"
                id="name"
                name="name"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="phone"
              >
                Your Phone
              </label>
              <input
                className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Your Phone"
                id="phone"
                name="phone"
              />
            </div>

            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Service Date
              </label>
              <input
                className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                type="date"
                placeholder="Enter Service Date "
                id="date"
                name="date"
              />
              <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                Service Price
              </label>
              <input
                className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Your Email"
                defaultValue={price}
                id="price"
                name="price"
              />
            </div>
          </div>

          <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
            Your Message
          </label>
          <textarea
            className="w-full p-4 rounded-md border"
            name="message"
            rows={7}
            placeholder="Enter Your Message"
            id="message"
          ></textarea>

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Order Confirm"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;

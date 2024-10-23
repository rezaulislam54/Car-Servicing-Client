import Swal from "sweetalert2";
import img from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const AddServicePage = () => {
  const style = {
    backgroundColor: "red",
    clipPath: "polygon(14% 86%, 84% 86%, 94% 100%, 5% 100%)",
  };

  const { user } = useContext(AuthContext);

  const submitFrom = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const price = e.target.price.value;
    const type = e.target.type.value;
    const img = e.target.img.value;
    const description = e.target.description.value;
    const email = user.email;
    const info = { title, price, type, img, description, email };
    console.log(info);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Service Added Successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="bg-white">
      <div className=" w-full rounded-lg relative ">
        <img src={img} className="w-full rounded-lg" />
        <div className="absolute top-0 left-0 rounded-lg w-full h-full text-start flex items-center  bg-gradient-to-r from-[#151515CC] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white md:w-1/2 lg:pl-12 md:pl-20 pl-5">
            <h2 className="text-4xl md:text-5xl  font-bold">Add New Service</h2>
          </div>
          <h2 className=" absolute bottom-4 -translate-x-1/2 left-1/2 z-30 text-white text-xl">
            Home/Service
          </h2>
          <div
            style={style}
            className="absolute bottom-0 -translate-x-1/2 h-[300px] w-[300px] left-1/2"
          ></div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-[#F3F3F3] rounded-lg p-20 my-20">
        {/* <h2 className="text-xl pt-10 text-center font-bold dark:text-black">
          Add New Service
        </h2> */}
        <form onSubmit={submitFrom}>
          <div className="md:flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                Service Name
              </label>
              <input
                className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder=" Service Name"
                id="name"
                name="title"
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Service Price
              </label>
              <input
                className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Service Price"
                id="price"
                name="price"
              />
            </div>

            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Service Type
              </label>
              <input
                className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Service Type "
                id="type"
                name="type"
              />
              <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                Service Photo
              </label>
              <input
                className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Service Photo URL"
                id="img"
                name="img"
              />
            </div>
          </div>

          <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
            Product Description
          </label>
          <textarea
            className="w-full p-4 rounded-md border"
            name="description"
            rows={7}
            placeholder="Product Description"
            id="description"
          ></textarea>

          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddServicePage;

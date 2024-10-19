import img1 from "../../../assets/images/products/1.png";
import img2 from "../../../assets/images/products/2.png";
import img3 from "../../../assets/images/products/3.png";
import img4 from "../../../assets/images/products/4.png";
import img5 from "../../../assets/images/products/5.png";
import img6 from "../../../assets/images/products/6.png";

const Product = () => {
  return (
    <div className=" my-20">
      <div className="text-center space-y-4">
        <p className="text-xl font-bold">Popular Products</p>
        <h2 className="text-4xl font-bold">Browse Our Products</h2>
        <p className="w-[550px] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>

      {/* products container */}
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-16">
        <div className="border rounded-lg p-6 text-center">
          <div className="bg-[#F3F3F3] p-8  rounded-lg mb-5">
            <img className="size-40 mx-auto" src={img1} />
          </div>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
          </div>
          <h1 className="text-2xl font-bold">Car Engine Plug</h1>
          <p className="text-xl font-semibold">Price: $20.00</p>
        </div>

        <div className="border rounded-lg p-6 text-center">
          <div className="bg-[#F3F3F3] p-8 rounded-lg mb-5">
            <img className="size-40 mx-auto" src={img2} />
          </div>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
          </div>
          <h1 className="text-2xl font-bold">Car Engine Plug</h1>
          <p className="text-xl font-semibold">Price: $20.00</p>
        </div>
        <div className="border rounded-lg p-6 text-center">
          <div className="bg-[#F3F3F3] p-8  rounded-lg mb-5">
            <img className="size-40 mx-auto" src={img3} />
          </div>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
          </div>
          <h1 className="text-2xl font-bold">Car Engine Plug</h1>
          <p className="text-xl font-semibold">Price: $20.00</p>
        </div>
        <div className="border rounded-lg p-6 text-center">
          <div className="bg-[#F3F3F3] p-8 rounded-lg mb-5">
            <img className="size-40 mx-auto" src={img4} />
          </div>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
          </div>
          <h1 className="text-2xl font-bold">Car Engine Plug</h1>
          <p className="text-xl font-semibold">Price: $20.00</p>
        </div>
        <div className="border rounded-lg p-6 text-center">
          <div className="bg-[#F3F3F3] p-8 rounded-lg mb-5">
            <img className="size-40 mx-auto" src={img5} />
          </div>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
          </div>
          <h1 className="text-2xl font-bold">Car Engine Plug</h1>
          <p className="text-xl font-semibold">Price: $20.00</p>
        </div>
        <div className="border rounded-lg p-6 text-center">
          <div className="bg-[#F3F3F3] p-8 rounded-lg mb-5">
            <img className="size-40 mx-auto" src={img6} />
          </div>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
          </div>
          <h1 className="text-2xl font-bold">Car Engine Plug</h1>
          <p className="text-xl font-semibold">Price: $20.00</p>
        </div>
        <div className="border rounded-lg p-6 text-center">
          <div className="bg-[#F3F3F3] p-8 rounded-lg mb-5">
            <img
              className="size-40 mx-auto"
              src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1729310255/png-transparent-two-silver-t-removebg-preview_swd42o.png"
            />
          </div>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
          </div>
          <h1 className="text-2xl font-bold">Car Engine Plug</h1>
          <p className="text-xl font-semibold">Price: $20.00</p>
        </div>
        <div className="border rounded-lg p-6 text-center">
          <div className="bg-[#F3F3F3] p-8 rounded-lg mb-5">
            <img
              className="size-40 mx-auto"
              src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1729310331/thumb-removebg-preview_xbxfy8.png"
            />
          </div>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              defaultChecked
            />
          </div>
          <h1 className="text-2xl font-bold">Car Engine Plug</h1>
          <p className="text-xl font-semibold">Price: $20.00</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

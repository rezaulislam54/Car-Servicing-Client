import { Link } from "react-router-dom";

const ServiceCart = ({ item }) => {
  const { _id, img, title, price } = item;

  return (
    <div className="border shadow-md p-5 rounded-lg space-y-3">
      <img className="rounded-lg md:h-[250px]" src={img} />
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-xl font-medium">Price: ${price}</p>
      <div className=" flex justify-between">
        <Link to={`/service/${_id}`}>
          <button className="bg-[#FF3811] text-white px-5 py-1 rounded-md ">
            Details
          </button>
        </Link>
        <Link to={`/checkout/${_id}`}>
          <button className="bg-[#FF3811] text-white px-4 py-1 rounded-md ">
            By Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCart;

import { Link } from "react-router-dom";

const ServiceCart = ({ item }) => {
  const { _id, img, title, price } = item;

  return (
    <div className="border shadow-md p-5 rounded-lg space-y-3">
      <img className="rounded-lg md:h-[250px]" src={img} />
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className=" flex justify-between">
        <p className="text-xl font-medium">Price: ${price}</p>
        <Link to={`/service/${_id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCart;

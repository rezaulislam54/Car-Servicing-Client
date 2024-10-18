const ServiceCart = ({ item }) => {
  const { img, title, price } = item;
  return (
    <div className="border shadow-md p-5 rounded-lg space-y-3">
      <img className="rounded-lg md:h-[250px]" src={img} />
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className=" flex justify-between">
        <p className="text-xl font-medium">Price: ${price}</p>
        <button>Details</button>
      </div>
    </div>
  );
};

export default ServiceCart;

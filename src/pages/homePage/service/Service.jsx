import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const Service = () => {
  const [service, setservice] = useState();

  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setservice(data));
  }, []);

  console.log(service);

  return (
    <div>
      <div className="text-center space-y-4">
        <p className="text-xl font-bold">Service</p>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p className="w-[550px] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {service?.map((i) => (
          <ServiceCart key={i._id} item={i}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Service;

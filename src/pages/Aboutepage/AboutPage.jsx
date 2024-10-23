import About from "../homePage/about/About";
import OurTeam from "../homePage/ourTeam/OurTeam";

const AboutPage = () => {
  const style = {
    backgroundColor: "red",
    clipPath: "polygon(14% 86%, 84% 86%, 94% 100%, 5% 100%)",
  };

  return (
    <div className="container mx-auto">
      <div className=" w-full rounded-lg relative ">
        <img
          src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1729310772/two-men-working-car-with-hood-open_1306097-82214_cobpgk.avif"
          className="w-full h-[350px] rounded-lg"
        />
        <div className="absolute top-0 left-0 rounded-lg w-full h-full text-start flex items-center  bg-gradient-to-r from-[#151515CC] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white md:w-1/2 lg:pl-12 md:pl-20 pl-5">
            <h2 className="text-4xl md:text-5xl  font-bold">About</h2>
          </div>
          <h2 className=" absolute bottom-4 -translate-x-1/2 left-1/2 z-30 text-white text-xl">
            Home/About Us
          </h2>
          <div
            style={style}
            className="absolute bottom-0 -translate-x-1/2 h-[300px] w-[300px] left-1/2"
          ></div>
        </div>
      </div>

      <About></About>
      <OurTeam></OurTeam>
    </div>
  );
};

export default AboutPage;

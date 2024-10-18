import img1 from "../../../assets/images/about_us/parts.jpg";
import img2 from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-12 gap-16 my-14 py-10">
      {/* img div */}
      <div className="col-span-5 relative">
        <img className="rounded-xl " src={img2} alt="" />
        <img
          className=" absolute -bottom-14 border-[10px] border-white rounded-xl  -right-16 w-[250px]  h-[250px]  md:w-[300px] md:h-[300px]"
          src={img1}
          alt=""
        />
      </div>
      {/* content div */}
      <div className="col-span-7 ml-8 px-5">
        <p className="text-red-500 text-xl font-bold mb-5">About us</p>
        <h1 className="font-bold text-3xl  lg:text-5xl lg:w-[376px] ">
          We are qualified & of experience in this field
        </h1>
        <p className=" mt-8  lg:w-[489px] opacity-80 font-medium ml-3">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look en slightly believable.
        </p>

        <p className="mt-8 lg:w-[489px] opacity-80 font-medium ml-3">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>

        <button className="bg-[#FF3811] px-4 py-2 mt-5 text-white rounded-xl">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;

import Slider from "../../components/slider/Slider";
import About from "./about/About";
import Service from "./service/Service";

const HomePage = () => {
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Service></Service>
    </div>
  );
};

export default HomePage;
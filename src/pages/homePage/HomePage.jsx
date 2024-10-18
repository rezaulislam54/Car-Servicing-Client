import Slider from "../../components/slider/Slider";
import About from "./about/About";
import Contact from "./contact/Contact";
import Product from "./product/Product";
import Service from "./service/Service";

const HomePage = () => {
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Service></Service>
      <Contact></Contact>
      <Product></Product>
    </div>
  );
};

export default HomePage;
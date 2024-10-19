import Slider from "../../components/slider/Slider";
import CoreFeature from "../coreFeature/CoreFeature";
import About from "./about/About";
import Contact from "./contact/Contact";
import OurTeam from "./ourTeam/OurTeam";
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
      <OurTeam></OurTeam>
      <CoreFeature></CoreFeature>
    </div>
  );
};

export default HomePage;
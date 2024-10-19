import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const MainLayoutes = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayoutes;
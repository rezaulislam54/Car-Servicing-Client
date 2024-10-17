import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
const MainLayoutes = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayoutes;
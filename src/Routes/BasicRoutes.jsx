import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../Layouts/MainLayoutes";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CartDetails from "../pages/cartDetails/CartDetails";
import AddServicePage from "../pages/addService/AddServicePage";
import CheckOut from "../pages/checkout/CheckOut";
import BookingsPage from "../pages/bokings/BookingsPage";
import PrivetRoutes from "./PrivetRoutes";
import ErrorPage from "../pages/error/ErrorPage";
import AboutPage from "../pages/Aboutepage/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutes></MainLayoutes>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/signup",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/service/:id",
        element: <CartDetails></CartDetails>,
        loader: ({ params }) =>
          fetch(
            `https://car-servicing-server-delta.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/addservice",
        element: (
          <PrivetRoutes>
            <AddServicePage></AddServicePage>
          </PrivetRoutes>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivetRoutes>
            <CheckOut></CheckOut>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-servicing-server-delta.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/bookings",
        element: (
          <PrivetRoutes>
            <BookingsPage></BookingsPage>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);

export default router;
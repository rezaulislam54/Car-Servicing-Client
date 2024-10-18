import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../Layouts/MainLayoutes";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CartDetails from "../pages/cartDetails/CartDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutes></MainLayoutes>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
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
        loader: ({ params }) => fetch(`services.json/${params.id}`),
      },
    ],
  },
]);

export default router;
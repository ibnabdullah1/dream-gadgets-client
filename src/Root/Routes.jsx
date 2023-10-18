import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/Mainlayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Components/AddProducts";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

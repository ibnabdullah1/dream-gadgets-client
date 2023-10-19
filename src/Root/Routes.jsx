import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/Mainlayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Components/AddProduct/AddProducts";
import Products from "../Components/Products/Products";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Apple from "../Components/Apple/Apple";
import LenovoProducts from "../Components/Lenovo/LenovoProducts";
import Brand from "../Components/Brand/Brand";
import MyCart from "../Components/MyCart/MyCart";
import VivoProducts from "../Components/Vivo/VivoProducts";
import AppleProductDetails from "../Components/Apple/AppleProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./brand.json"),
      },
      {
        path: "/",
        element: <Brand></Brand>,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/productscard",
        element: <Products />,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/apple",
        element: <Apple />,
        loader: () => fetch("http://localhost:5000/Apple"),
      },
      {
        path: "/apple/:id",
        element: <AppleProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Apple/${params.id}`),
      },
      {
        path: "/lenovo",
        element: <LenovoProducts />,
        loader: () => fetch("http://localhost:5000/lenovo"),
      },
      {
        path: "/vivo",
        element: <VivoProducts />,
        loader: () => fetch("http://localhost:5000/vivo"),
      },
      {
        path: "/cartProducts",
        element: <MyCart />,
        loader: () => fetch("http://localhost:5000/cart"),
      },
    ],
  },
]);

export default router;

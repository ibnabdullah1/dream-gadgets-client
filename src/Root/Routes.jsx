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
import VivoProductCard from "../Components/Vivo/VivoProductcard";
import LenovoPCard from "../Components/Lenovo/LenovoPCard";
import SamsungProducts from "../Components/Samsung/SamsungProducts";
import SamsungProductDetails from "../Components/Samsung/SamsungProductDetails";
import HpProducts from "../Components/HP/HpProducts";

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
        path: "/lenovo/:id",
        element: <LenovoPCard />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/lenovo/${params.id}`),
      },
      {
        path: "/vivo",
        element: <VivoProducts />,
        loader: () => fetch("http://localhost:5000/vivo"),
      },
      {
        path: "/vivo/:id",
        element: <VivoProductCard />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/vivo/${params.id}`),
      },
      {
        path: "/samsung",
        element: <SamsungProducts />,
        loader: () => fetch("http://localhost:5000/samsung"),
      },
      {
        path: "/samsung/:id",
        element: <SamsungProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/samsung/${params.id}`),
      },
      {
        path: "/hp",
        element: <HpProducts />,
        loader: () => fetch("http://localhost:5000/hp"),
      },
      {
        path: "/hp/:id",
        element: <SamsungProductDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/hp/${params.id}`),
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

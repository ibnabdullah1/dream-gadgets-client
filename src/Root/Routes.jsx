import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/Mainlayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Components/AddProduct/AddProducts";
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
import CanonProducts from "../Components/Canon/CanonProducts";
import CanonProductDetails from "../Components/Canon/CanonProductDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateCart from "../Components/Update/UpdateCart";

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
        element: (
          <PrivateRoute>
            {" "}
            <AddProduct />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <Apple />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/Apple"),
      },
      {
        path: "/apple/:id",
        element: (
          <PrivateRoute>
            <AppleProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Apple/${params.id}`),
      },
      {
        path: "/lenovo",
        element: (
          <PrivateRoute>
            <LenovoProducts />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/lenovo"),
      },
      {
        path: "/lenovo/:id",
        element: (
          <PrivateRoute>
            <LenovoPCard />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/lenovo/${params.id}`),
      },
      {
        path: "/vivo",
        element: (
          <PrivateRoute>
            {" "}
            <VivoProducts />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/vivo"),
      },
      {
        path: "/vivo/:id",
        element: (
          <PrivateRoute>
            {" "}
            <VivoProductCard />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/vivo/${params.id}`),
      },
      {
        path: "/samsung",
        element: (
          <PrivateRoute>
            <SamsungProducts />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/samsung"),
      },
      {
        path: "/samsung/:id",
        element: (
          <PrivateRoute>
            <SamsungProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/samsung/${params.id}`),
      },
      {
        path: "/hp",
        element: (
          <PrivateRoute>
            {" "}
            <HpProducts />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/hp"),
      },
      {
        path: "/hp/:id",
        element: (
          <PrivateRoute>
            <SamsungProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/hp/${params.id}`),
      },
      {
        path: "/canon",
        element: (
          <PrivateRoute>
            <CanonProducts />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/canon"),
      },
      {
        path: "/canon/:id",
        element: (
          <PrivateRoute>
            <CanonProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/canon/${params.id}`),
      },

      {
        path: "/cartProducts",
        element: (
          <PrivateRoute>
            {" "}
            <MyCart />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "cartProducts/update/:id",
        element: <UpdateCart />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cart/${params.id}`),
      },
    ],
  },
]);

export default router;

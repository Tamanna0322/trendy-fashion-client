import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/allProducts",
            element: <AllProducts></AllProducts>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
      ]
    },
  ]);
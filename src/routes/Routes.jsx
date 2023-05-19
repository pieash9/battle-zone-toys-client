import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ViwDetails from "../pages/Shared/ViwDetails";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../pages/Blogs/Blogs";
import AllToys from "../pages/AllToys/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "/allToys/details/:id",
        element: (
          <PrivateRoute>
            <ViwDetails />
          </PrivateRoute>
        ),
        loader: ({params})=> fetch(`http://localhost:5000/allToys/details/${params.id}`)
        
      },
    ],
  },
]);
export default router;

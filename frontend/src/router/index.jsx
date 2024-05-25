import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Users from "../pages/Users.jsx";
import Error from "../pages/Error.jsx";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "users", element: <Users /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

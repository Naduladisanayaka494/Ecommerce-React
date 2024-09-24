import { createBrowserRouter } from "react-router-dom";
import Login from "./views/login.jsx";
import Register from "./views/register.jsx";
import DefultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Users from "./views/users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefultLayout />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },

  {
    path: "/",
    element: <GuestLayout />,
    children: [

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

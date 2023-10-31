import { createBrowserRouter } from "react-router-dom";
import Main from "../Mian/Main";
import Home from "../../Pages/Home/Home/Home";
import Contact from "../../Pages/Contact/Contact";
import Menu from "../../Pages/Menu/Menu";
import Shop from "../../Pages/Shop/Shop";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../../Pages/Dashboad/Dashboard";
import AdminHome from "../../Pages/Dashboad/AdminDashboard/AdminHome";
import AddItem from "../../Pages/Dashboad/AdminDashboard/AddItem";
import ManageItem from "../../Pages/Dashboad/AdminDashboard/ManageItem";
import ManageBooking from "../../Pages/Dashboad/AdminDashboard/ManageBooking";
import ManageUser from "../../Pages/Dashboad/AdminDashboard/ManageUser";
import UserHome from "../../Pages/Dashboad/UserDashboard/UserHome";
import Payment from "../../Pages/Dashboad/UserDashboard/Payment";
import Cart from "../../Pages/Dashboad/UserDashboard/Cart";
import Booking from "../../Pages/Dashboad/UserDashboard/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop/:category",
        element: <PrivateRoute>
          <Shop />
        </PrivateRoute>,
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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "adminHome",
        element: <AdminHome/>
      },
      {
        path: "addItem",
        element: <AddItem/>
      },
      {
        path: "manageItem",
        element: <ManageItem/>
      },
      {
        path: "manageBooking",
        element: <ManageBooking/>
      },
      {
        path: "manageUser",
        element: <ManageUser/>
      },
      {
        path: "userHome",
        element: <UserHome/>
      },
      {
        path: "payment",
        element: <Payment/>
      },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "booking",
        element: <Booking/>
      }
    ]
  },
]);

export default router;

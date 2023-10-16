import { createBrowserRouter } from "react-router-dom";
import Main from "../Mian/Main";
import Home from "../../Pages/Home/Home/Home";
import Contact from "../../Pages/Contact/Contact";
import Menu from "../../Pages/Menu/Menu";
import Shop from "../../Pages/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/menu",
          element: <Menu/>
        },
        {
          path: "/shop",
          element: <Shop/>
        }
    ]
  },
]);

export default router;

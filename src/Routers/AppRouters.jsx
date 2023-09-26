import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home";
import MyOrders from "../Pages/MyOrders";
import MyOrder from "../Pages/MyOrder";
import NotFound from "../Pages/NotFound";

const AppRouters = () => {
  let routers = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furniture", element: <Home /> },
    { path: "/shoes", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routers;
};

export default AppRouters;

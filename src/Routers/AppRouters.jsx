import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home";
import MyAccount from "../Pages/MyAccount";
import MyOrders from "../Pages/MyOrders";
import MyOrder from "../Pages/MyOrder";
import NotFound from "../Pages/NotFound";
import SignIn from "../Pages/SignIn";

// ... otros imports de páginas

const AppRouters = () => {
  let routers = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routers;
};

export default AppRouters;

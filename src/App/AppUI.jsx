import { BrowserRouter } from "react-router-dom";
import AppRouters from "../Routers/AppRouters";
import Navbar from "../components/Navabar";

const AppUI = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouters />
        <Navbar />
      </BrowserRouter>
    </>
  );
};

export default AppUI;

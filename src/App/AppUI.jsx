import { BrowserRouter } from "react-router-dom";
import AppRouters from "../Routers/AppRouters";
import Navbar from "../components/Navabar";
import InfoItem from "../InfoItem";
import MessegeModal from "../MessegeModal";

const AppUI = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouters />
        <Navbar />
        <InfoItem />
        <MessegeModal />
      </BrowserRouter>
    </>
  );
};

export default AppUI;

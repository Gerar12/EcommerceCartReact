import { BrowserRouter } from "react-router-dom";
import AppRouters from "../Routers/AppRouters";
import Navbar from "../components/Navabar";
import Footer from "../components/footer";
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
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppUI;

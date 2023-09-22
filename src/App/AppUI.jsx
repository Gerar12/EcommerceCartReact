import { BrowserRouter } from "react-router-dom";
import AppRouters from "../Routers/AppRouters";

const AppUI = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    </>
  );
};

export default AppUI;

import { useState, createContext } from "react";
import PropTypes from "prop-types";

const EcommerContext = createContext();

const EcommerProviner = ({ children }) => {
  const [navbarActi, setNavbarActi] = useState(false);

  return (
    <EcommerContext.Provider value={{ navbarActi, setNavbarActi }}>
      {children}
    </EcommerContext.Provider>
  );
};

EcommerProviner.propTypes = {
  children: PropTypes.node.isRequired,
};

export { EcommerContext, EcommerProviner };

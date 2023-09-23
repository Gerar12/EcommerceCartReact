import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import fetchProducts from "./logic/api";

const EcommerContext = createContext();

const EcommerProviner = ({ children }) => {
  const [items, setItems] = useState([]);
  const [countCart, setCounCart] = useState(0);

  useEffect(() => {
    fetchProducts(setItems);
  }, []);

  return (
    <EcommerContext.Provider value={{ items, setCounCart, countCart }}>
      {children}
    </EcommerContext.Provider>
  );
};

EcommerProviner.propTypes = {
  children: PropTypes.node.isRequired,
};

export { EcommerContext, EcommerProviner };

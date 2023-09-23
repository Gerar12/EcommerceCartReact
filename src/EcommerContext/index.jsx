import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import fetchProducts from "./logic/api";

const EcommerContext = createContext();

const EcommerProviner = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchProducts(setItems);
  }, []);

  return (
    <EcommerContext.Provider value={{ items }}>
      {children}
    </EcommerContext.Provider>
  );
};

EcommerProviner.propTypes = {
  children: PropTypes.node.isRequired,
};

export { EcommerContext, EcommerProviner };

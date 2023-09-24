import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import fetchProducts from "./logic/api";

const EcommerContext = createContext();
const EcommerProviner = ({ children }) => {
  const [items, setItems] = useState([]);
  const [countCart, setCounCart] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [myOrder, setNyOrder] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [previousCount, setPreviousCount] = useState(countCart);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [sumPrice, setSumPrice] = useState(0);

  useEffect(() => {
    const total = myOrder.reduce((acc, item) => acc + item.price, 0);
    const formattedTotal = total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    setSumPrice(formattedTotal);
  }, [myOrder]);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    if (previousCount < countCart) {
      setMessage("Added to cart");
    } else if (previousCount > countCart) {
      setMessage("Deleted");
    }

    setPreviousCount(countCart);

    if (message) {
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    }
  }, [countCart, isFirstRender, previousCount, message]);

  useEffect(() => {
    fetchProducts(setItems);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden"; // Desactiva el scroll
    } else {
      document.body.style.overflow = "unset"; // Reactiva el scroll
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  return (
    <EcommerContext.Provider
      value={{
        items,
        setCounCart,
        countCart,
        setModalOpen,
        modalOpen,
        selectedItem,
        setSelectedItem,
        myOrder,
        setNyOrder,
        isOpen,
        setIsOpen,
        message,
        sumPrice,
      }}
    >
      {children}
    </EcommerContext.Provider>
  );
};

EcommerProviner.propTypes = {
  children: PropTypes.node.isRequired,
};

export { EcommerContext, EcommerProviner };

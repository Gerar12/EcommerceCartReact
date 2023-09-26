import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchProducts, fetchForCategory } from "./logic/api";
import useLocalStorage from "./useLocalStorage";
const EcommerContext = createContext();

const EcommerProviner = ({ children }) => {
  const [items, setItems] = useState([]);

  const [itemResult, setItemResult] = useState([]);
  const { value: countCart, setValue: setCounCart } = useLocalStorage(
    "countCart",
    0
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const { value: myOrder, setValue: setNyOrder } = useLocalStorage(
    "myOrder",
    []
  );
  const { value: allOrders, setValue: setAllOrders } = useLocalStorage(
    "myOrders",
    []
  );
  const [myOrderEnd, setMyOrderEnd] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [previousCount, setPreviousCount] = useState(countCart);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [sumPrice, setSumPrice] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentProcessed, setPaymentProcessed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const serchItem = (e) => {
    setInputValue(e.target.value);
    const result = items.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLocaleLowerCase())
    );
    setItemResult(result);
  };

  useEffect(() => {
    if (myOrderEnd.length > 0) {
      const myOrderAll = {
        date: new Date().toLocaleString(),
        items: myOrderEnd.length,
        total: sumPrice,
        user: `@yourName`,
        id: Date.now(),
      };
      setAllOrders([myOrderAll, ...allOrders]);
      console.log(allOrders);
    }
  }, [myOrderEnd]);

  useEffect(() => {
    const total = myOrder.reduce((acc, item) => acc + item.price, 0);
    const formattedTotal = total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    setSumPrice(formattedTotal);
  }, [myOrder]);

  useEffect(() => {
    // Actualizar el previousCount al principio.
    setPreviousCount(countCart);

    // Evitar la ejecución en el primer renderizado
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    // Establecer el mensaje basado en las condiciones
    if (previousCount > countCart) {
      setMessage("Deleted");
    } else if (previousCount < countCart) {
      setMessage("Added to cart");
    } else if (paymentProcessed) {
      setMessage("Payment successful!");
      setPaymentProcessed(false);
    }

    if (message) {
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    }
  }, [countCart, isFirstRender, previousCount, message, paymentProcessed]);
  useEffect(() => {
    fetchProducts(setItems);
  }, []);

  useEffect(() => {
    setItemResult(items);
  }, [items]);

  useEffect(() => {
    if (modalOpen || isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen, isMenuOpen]);

  const addMyOrdersPays = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setMyOrderEnd([...myOrderEnd, ...myOrder]);
      setCounCart(0);
      setNyOrder([]);
      setPaymentProcessed(true);
      setIsProcessing(false);
    }, 5000);
  };

  const newCategory = (e) => {
    setIsMenuOpen(false);
    let category = Number(e.currentTarget.getAttribute("value"));
    if (category <= 0) {
      fetchProducts(setItems);
    } else {
      fetchForCategory(setItems, category);
    }
  };

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
        addMyOrdersPays,
        myOrderEnd,
        setMyOrderEnd,
        setIsProcessing,
        isProcessing,
        isMenuOpen,
        setIsMenuOpen,
        allOrders,
        serchItem,
        itemResult,
        newCategory,
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

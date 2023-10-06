import { useContext, useEffect, useState } from "react";
import { EcommerContext } from "../EcommerContext";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import "./infoitem.css";

const InfoItem = () => {
  const {
    setModalOpen,
    modalOpen,
    selectedItem,
    setCounCart,
    countCart,
    setNyOrder,
    myOrder,
    login,
  } = useContext(EcommerContext);
  const [animation, setAnimation] = useState("modal-animation-enter");

  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => {
        setAnimation("modal-animation-active");
      }, 10);
    } else {
      setAnimation("modal-animation-enter");
    }
  }, [modalOpen]);

  if (!modalOpen) {
    return null;
  }

  const {
    images,
    title,
    description,
    price,
    category: { name },
  } = selectedItem;

  const addCard = () => {
    if (!myOrder.some((existingItem) => existingItem.id === selectedItem.id)) {
      setNyOrder([selectedItem, ...myOrder]);
      setCounCart(countCart + 1);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div
        className={`bg-gray-900 absolute top-0 left-0 w-full h-full ${animation} modal-overlay-animation-active`}
        onClick={() => setModalOpen(false)}
      ></div>

      <div
        className={`bg-gray-900 p-6 rounded-lg shadow-xl w-3/4 max-w-xl relative ${animation}`}
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 transition-colors duration-300"
          onClick={() => setModalOpen(false)}
        >
          <AiOutlineClose size={24} />
        </button>

        <img
          src={images}
          alt={title}
          className="w-full h-52 object-cover rounded-t-lg mb-4"
        />

        <div className="text-gray-200">
          <h2 className="text-blue-400 font-bold text-2xl mb-2">{title}</h2>
          <p className="text-gray-400 mb-2">Category: {name}</p>
          <p className="text-gray-300 mb-4">{description}</p>
          <span className="text-blue-500 font-bold text-lg mb-4 block">
            ${price}
          </span>

          {login ? (
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300"
              onClick={addCard}
            >
              <FaShoppingCart />
              Add to Cart
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default InfoItem;

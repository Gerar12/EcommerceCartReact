import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { EcommerContext } from "../../EcommerContext";
import "./card.css";

const Card = () => {
  const {
    setCounCart,
    countCart,
    setModalOpen,
    setSelectedItem,
    myOrder,
    setNyOrder,
    itemResult,
    login,
  } = useContext(EcommerContext);

  const existCart = (item) => {
    if (login) {
      if (!myOrder.some((existingItem) => existingItem.id === item.id)) {
        setNyOrder([item, ...myOrder]);
        setCounCart(countCart + 1);
      }
    }
  };

  const infoItemOpen = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <>
      {itemResult
        .filter((item) => !item.title.includes("newProduct"))
        .map((item) => (
          <div
            key={item.id}
            className="card relative bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 w-60 m-auto rounded-xl overflow-hidden border-2 border-gray-700"
          >
            <figure className="relative">
              <img
                src={item.images}
                alt="Producto"
                className="product-image w-full h-44 object-cover"
              />
              <div className="absolute bottom-4 right-4">
                <FaHeart
                  className={`text-2xl cursor-pointer transform hover:scale-110 transition-transform duration-200 ${
                    myOrder.some((orderItem) => orderItem.id === item.id)
                      ? "text-red-700 heart-animation"
                      : "text-white"
                  } hover:text-red-500`}
                />
              </div>
              {login ? (
                <div className="card-overlay absolute inset-0 bg-transparent flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <FaShoppingCart
                    className="text-4xl text-blue-500 cursor-pointer transform hover:scale-110 transition-transform duration-200"
                    onClick={() => {
                      existCart(item);
                    }}
                  />
                </div>
              ) : null}
            </figure>
            <div className="p-5">
              <p className="text-gray-300 font-medium text-md mb-3 truncate">
                {item.title}
              </p>
              <div className="flex items-center justify-between mb-4">
                <p className="text-blue-500 font-bold text-lg">${item.price}</p>
              </div>
              <button
                className="text-sm bg-gradient-to-r from-blue-700 to-blue-900 text-white py-2 px-4 rounded-md font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => {
                  infoItemOpen(item);
                }}
              >
                Information
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;

import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { EcommerContext } from "../../EcommerContext";
import "./card.css";

const Card = () => {
  const {
    items,
    setCounCart,
    countCart,
    setModalOpen,
    setSelectedItem,
    myOrder,
    setNyOrder,
  } = useContext(EcommerContext);

  const existCart = (item) => {
    if (!myOrder.some((existingItem) => existingItem.id === item.id)) {
      setNyOrder([item, ...myOrder]);
      setCounCart(countCart + 1);
    }
  };

  const infoItemOpen = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <>
      {items
        .filter((item) => !item.title.includes("newProduct"))
        .map((item) => (
          <div
            key={item.id}
            className="card rounded-lg overflow-hidden bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 card-enter max-h-full w-40 items-center m-auto"
          >
            <figure className="relative">
              <img
                src={item.images}
                alt="Producto"
                className="product-image w-full h-36 md:h-40 object-cover"
              />
              <div className="card-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <FaShoppingCart
                  className="text-3xl text-blue-400 cursor-pointer"
                  onClick={() => {
                    existCart(item);
                  }}
                />
              </div>
            </figure>
            <div className="p-4">
              <p className="text-gray-200 font-semibold text-lg mb-2">
                {item.title.length > 8
                  ? item.title.substring(0, 10) + "..."
                  : item.title}
              </p>
              <p className="text-blue-400 font-bold text-xl mb-2">
                ${item.price}
              </p>
              <button
                className="text-white bg-gradient-to-r from-blue-500 to-blue-600 py-1 px-4 rounded-md font-semibold shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105"
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

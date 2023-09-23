import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { EcommerContext } from "../../EcommerContext";
import "./card.css";

const Card = () => {
  const { items } = useContext(EcommerContext);

  return (
    <>
      {items
        .filter((item) => !item.title.includes("newProduct")) // Esto filtra los items cuyo título no incluye 'newProduct'
        .map((item) => (
          // El resto del código sigue igual...
          <div
            key={item.id}
            className="card rounded-lg overflow-hidden bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 card-enter"
          >
            <figure className="relative">
              <img
                src={item.images}
                alt="Producto"
                className="product-image w-full h-36 md:h-40 object-cover"
              />
              <div className="card-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <FaShoppingCart className="text-3xl text-yellow-400 cursor-pointer" />
              </div>
            </figure>
            <div className="p-4">
              <p className="text-white font-semibold text-lg mb-2">
                {item.title.length > 12
                  ? item.title.substring(0, 12) + "..."
                  : item.title}
              </p>
              <p className="text-yellow-400 font-bold text-xl">${item.price}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;

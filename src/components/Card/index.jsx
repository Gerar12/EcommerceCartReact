import { FaShoppingCart } from "react-icons/fa";
import "./card.css";

const Card = () => {
  return (
    <div className="card rounded-lg overflow-hidden bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 card-enter">
      <figure className="relative">
        <img
          src="https://via.placeholder.com/400"
          alt="Producto"
          className="w-full h-36 md:h-40 object-cover"
        />
        <div className="card-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <FaShoppingCart className="text-3xl text-yellow-400 cursor-pointer" />
        </div>
      </figure>
      <div className="p-4">
        <p className="text-white font-semibold text-lg mb-2">HeadPhones</p>
        <p className="text-yellow-400 font-bold text-xl">$300</p>
      </div>
    </div>
  );
};

export default Card;

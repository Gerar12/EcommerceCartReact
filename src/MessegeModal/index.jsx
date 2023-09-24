import { useContext } from "react";
import { EcommerContext } from "../EcommerContext";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const MessegeModal = () => {
  const { isOpen, setIsOpen, message } = useContext(EcommerContext);

  if (!isOpen) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-blue-900 text-blue-100 p-2 rounded-lg shadow-md w-48 flex items-center">
        <AiOutlineCheckCircle className="text-xl mr-2" />
        <h2 className="text-sm font-medium flex-grow truncate">{message}</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-blue-100 hover:text-blue-300 p-1"
        >
          <AiOutlineCloseCircle className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default MessegeModal;

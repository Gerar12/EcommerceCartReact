import { useContext } from "react";
import { EcommerContext } from "../EcommerContext";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineExclamation,
} from "react-icons/ai";

const MessegeModal = () => {
  const { isOpen, setIsOpen, message, login } = useContext(EcommerContext);

  if (login && !isOpen) return null;

  const displayedMessage = login ? message : "Sign up to shop with us.";

  return (
    <div className="fixed bottom-36 right-4 z-50">
      <div
        className={
          login
            ? "bg-blue-900 text-blue-100 p-2 rounded-lg shadow-md w-48 flex items-center"
            : "bg-yellow-500 text-blue-900 p-2 rounded-lg shadow-md w-48 flex items-center"
        }
      >
        {login ? (
          <AiOutlineCheckCircle className="text-xl mr-2" />
        ) : (
          <AiOutlineExclamation className="text-xl mr-2" />
        )}
        <h2 className="text-sm font-medium flex-grow truncate">
          {displayedMessage}
        </h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-blue-100 hover:text-blue-300 p-1"
        >
          {login ? <AiOutlineCloseCircle className="text-lg" /> : null}
        </button>
      </div>
    </div>
  );
};

export default MessegeModal;

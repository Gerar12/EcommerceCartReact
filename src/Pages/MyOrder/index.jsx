import { useContext } from "react";
import { EcommerContext } from "../../EcommerContext";
import Layout from "../../Layout";
import { AiFillDelete } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa";
import RingLoader from "react-spinners/RingLoader";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./myorders.css";

const MyOrder = () => {
  const {
    myOrder,
    setNyOrder,
    setCounCart,
    countCart,
    sumPrice,
    addMyOrdersPays,
    isProcessing,
  } = useContext(EcommerContext);

  const fillterMyOrder = (item) => {
    setNyOrder((prevItems) =>
      prevItems.filter((element) => element.id !== item.id)
    );
    setCounCart(countCart - 1);
  };

  return (
    <Layout>
      <div className="grid grid-row-2">
        <div className="container px-4 ">
          <h1 className="text-3xl font-semibold mt-20 mb-10 text-center">
            <span className="text-blue-300">My</span> Cart
          </h1>

          {myOrder.length === 0 ? (
            <div className=" flex flex-col items-center justify-center mt-10">
              <div className="p-8 rounded-md shadow-lg bg-blue-950">
                <p className="text-lg font-semibold text-white text-center">
                  You do not have any items in your cart.
                </p>
                <div className="mt-2 flex items-center justify-center">
                  <Link
                    to="/"
                    className="px-5 py-2 bg-gray-700 hover:bg-gray-900 text-white rounded-md font-bold transition-transform transform hover:scale-105 flex items-center justify-center"
                  >
                    <span className="mr-2">Shop at</span>
                    <span className="text-blue-300">E</span>xpre
                    <span className="text-blue-300">S</span>tore
                    <TbExternalLink className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="mt-10 bg-gray-900 p-5 pt-2 rounded-md max-h-60  overflow-y-auto">
                {myOrder.map((item) => (
                  <div
                    key={item.id}
                    className="my-2 border-b border-gray-700 pb-2 sm:my-4 sm:pb-4"
                  >
                    <div className="flex items-center mb-2">
                      <img
                        src={item.images}
                        alt={item.title}
                        className="object-cover h-12 w-12 rounded-full mr-2 sm:h-16 sm:w-16"
                      />
                      <div className="flex-1">
                        <p className="text-white text-sm sm:text-base">
                          <span className="font-extrabold text-blue-300">
                            Product:{" "}
                          </span>
                          {item.title}
                        </p>
                        <p className="text-white text-sm sm:text-base mt-1">
                          <span className="font-extrabold text-blue-300">
                            Price:
                          </span>
                          {""} ${item.price}
                        </p>
                      </div>
                      <button
                        className="p-1 sm:p-2 rounded-full transition-colors duration-300 transform bg-blue-900 hover:bg-blue-800 focus:ring focus:ring-blue-500 focus:outline-none"
                        onClick={() => fillterMyOrder(item)}
                      >
                        <AiFillDelete className="text-white text-lg" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 font-bold text-center">
                Total: <span className="text-blue-300">{sumPrice}</span>{" "}
              </p>
              <div className="mt-5 flex flex-col items-center">
                {isProcessing ? (
                  <>
                    <RingLoader
                      className="font-extrabold mt-5  "
                      color="white"
                    />
                    <p className="m-auto font-extrabold">
                      Processing your purchase...
                    </p>
                  </>
                ) : (
                  <button
                    className="flex items-center justify-center px-6 py-2 bg-blue-900 text-white rounded font-medium transition-colors duration-300 hover:bg-blue-800 focus:ring focus:ring-blue-500 focus:outline-none "
                    onClick={addMyOrdersPays}
                  >
                    <FaCreditCard className="mr-2 text-lg " /> Pay Order
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MyOrder;

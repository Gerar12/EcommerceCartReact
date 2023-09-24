import { useContext } from "react";
import { EcommerContext } from "../../EcommerContext";
import Layout from "../../Layout";
import { AiFillDelete } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa";

const MyOrder = () => {
  const { myOrder, setNyOrder, setCounCart, countCart, sumPrice } =
    useContext(EcommerContext);

  const fillterMyOrder = (item) => {
    setNyOrder((prevItems) =>
      prevItems.filter((element) => element.id !== item.id)
    );
    setCounCart(countCart - 1);
  };

  return (
    <Layout>
      <div className="grid grid-row-2">
        <div className="container px-4">
          <h1 className="text-3xl font-semibold mt-20 mb-10">
            <span className="text-blue-700">My</span> Cart
          </h1>

          {myOrder.length === 0 ? (
            <p className="text-white mt-4">
              You do not have any items in your cart
            </p>
          ) : (
            <>
              <div className="max-h-[18rem] overflow-y-auto">
                {myOrder.map((item) => (
                  <div
                    key={item.id}
                    className="text-white border-b border-gray-200 py-4"
                  >
                    <div className="flex justify-between items-center space-x-4">
                      <div className="flex space-x-4">
                        <img
                          src={item.images}
                          alt={item.title}
                          className="object-cover h-12 w-12 rounded-full"
                        />
                        <div className="flex-grow flex flex-col justify-center">
                          <h2 className="text-white font-medium truncate">
                            {item.title.length > 10
                              ? item.title.substring(0, 10) + "..."
                              : item.title}
                          </h2>
                          <p className="text-blue-500 font-semibold text-sm">
                            <span className="text-white">price:</span> $
                            {item.price}
                          </p>
                        </div>
                      </div>
                      <div>
                        <button
                          className="p-2 rounded-full transition-colors duration-300 transform bg-blue-900 hover:bg-blue-800 focus:ring focus:ring-blue-500 focus:outline-none"
                          onClick={() => {
                            fillterMyOrder(item);
                          }}
                        >
                          <AiFillDelete className="text-white text-lg" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 font-bold">
                Total: <span className="text-blue-600">{sumPrice}</span>{" "}
              </p>
              <div className="mt-5">
                <button className="flex items-center justify-center px-6 py-2 bg-blue-900 text-white rounded font-medium transition-colors duration-300 hover:bg-blue-800 focus:ring focus:ring-blue-500 focus:outline-none">
                  <FaCreditCard className="mr-2 text-lg" /> Pay Order
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MyOrder;

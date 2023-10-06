import Layout from "../../Layout";
import { EcommerContext } from "../../EcommerContext";
import { useContext, useEffect } from "react";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaCalendar, FaCartPlus, FaDollarSign, FaUser } from "react-icons/fa";
const MyOrders = () => {
  const { allOrders, login } = useContext(EcommerContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/sign-in"); // Asegúrate de ajustar la ruta según la que utilices para el inicio de sesión
    }
  }, [login, navigate]);
  return (
    <Layout>
      <h1 className="text-3xl mt-20 font-extrabold text-center">
        <span className="text-blue-300">My</span> Orders
      </h1>
      <div>
        {allOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-10  ">
            <div className=" p-8 rounded-md shadow-md bg-blue-950">
              <p className="text-lg font-semibold text-white mb-4 text-center">
                You haven&apos;t placed any orders yet. Make your first order at
                ExpreStore!
              </p>
              <div className="m-auto flex items-center justify-center">
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
            <div className="mt-10 bg-gray-900 p-5 pt-2 rounded-md max-h-112 overflow-y-auto">
              {allOrders.map((item) => (
                <div
                  key={item.id}
                  className="my-4 border-b border-gray-700 pb-4"
                >
                  <p className="mb-2 text-white flex items-center">
                    <FaCalendar className="mr-2 text-blue-300" />
                    <span className="font-extrabold text-blue-300">
                      Order Date:
                    </span>
                    <span className="ml-2">{item.date}</span>
                  </p>
                  <p className="mb-2 text-white flex items-center">
                    <FaCartPlus className="mr-2 text-blue-300" />
                    <span className="font-extrabold text-blue-300">
                      Number of items:
                    </span>
                    <span className="ml-2">{item.items}</span>
                  </p>
                  <p className="mb-2 text-white flex items-center">
                    <FaDollarSign className="mr-2 text-blue-300" />
                    <span className="font-extrabold text-blue-300">
                      Total payment:
                    </span>
                    <span className="ml-2">{item.total}</span>
                  </p>
                  <p className="text-white flex items-center">
                    <FaUser className="mr-2 text-blue-300" />
                    <span className="font-extrabold text-blue-300">
                      Purchased by:
                    </span>
                    <span className="ml-2">{item.user}</span>
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default MyOrders;

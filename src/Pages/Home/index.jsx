import { useContext } from "react";
import Card from "../../components/Card";
import Layout from "../../Layout";
import { FaSearch } from "react-icons/fa";
import { EcommerContext } from "../../EcommerContext";

const Home = () => {
  const { serchItem } = useContext(EcommerContext);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="mt-28 text-3xl text-center font-bold">
          <span className="text-blue-300">All</span> Products
        </h1>
        <div className="my-5 w-3/4 sm:w-1/2 lg:w-1/3 flex border border-gray-300 rounded-md shadow-sm hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <input
            type="text"
            placeholder="Search an article"
            className="p-3 w-full bg-gray-800 text-gray-300 placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:border-gray-600 focus:ring focus:ring-gray-500 focus:ring-opacity-20"
            onChange={serchItem}
          />
          <div className="p-3">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
      </div>
      <Layout>
        <div className="flex flex-wrap gap-4">
          <Card />
        </div>
      </Layout>
    </>
  );
};

export default Home;

import Card from "../../components/Card";
import Layout from "../../Layout";

const Home = () => {
  return (
    <>
      <h1 className="mt-28 text-3xl text-center font-bold">
        <span className="text-blue-300">All</span> Products
      </h1>
      <Layout>
        <div className="flex flex-wrap gap-4  ">
          <Card />
        </div>
      </Layout>
    </>
  );
};

export default Home;

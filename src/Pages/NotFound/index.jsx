import Layout from "../../Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-4">404</h1>
          <p className="text-2xl font-semibold text-white mb-4">
            Oops! Page not found.
          </p>
          <p className="text-gray-500">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

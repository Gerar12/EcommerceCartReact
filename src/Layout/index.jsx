import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-wrap mt-5 gap-5 justify-center p-3">
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

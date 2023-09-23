import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return <div className="container mt-5 p-3  m-auto">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

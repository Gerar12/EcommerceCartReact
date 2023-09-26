import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="md:container md:mt-5 md:p-3  md:m-auto">{children}</div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

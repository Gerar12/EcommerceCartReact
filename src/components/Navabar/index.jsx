import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EcommerContext } from "../../EcommerContext";

import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaTshirt,
  FaLaptop,
  FaCouch,
  FaGamepad,
  FaBoxOpen,
  FaClipboardList,
  FaSignInAlt,
  FaUser,
} from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const { countCart, setIsMenuOpen, isMenuOpen, newCategory, login, acount } =
    useContext(EcommerContext);

  const activeStyle = "underline underline-offset-4 text-blue-400";

  return (
    <nav className="bg-gray-900 text-white top-0 p-4 fixed z-10 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-3xl font-extrabold text-white">
          <span className="text-blue-700">E</span>xpre
          <span className="text-blue-700">S</span>tore
        </NavLink>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links (centered for desktop) */}
        <div className="hidden md:flex md:space-x-4">
          <NavLink
            to="/"
            onClick={newCategory}
            className={({ isActive }) => {
              return isActive ? activeStyle : "text-white hover:text-blue-400";
            }}
          >
            All
          </NavLink>
          {["/clothes", "/electronics", "/furniture", "/shoes", "/others"].map(
            (path, index) => (
              <NavLink
                key={path}
                to={path}
                value={index + 1}
                className={({ isActive }) => {
                  return isActive
                    ? activeStyle
                    : "text-white hover:text-blue-400";
                }}
                onClick={newCategory}
              >
                {path === "/" ? "All" : path.slice(1)}
              </NavLink>
            )
          )}
        </div>

        {/* User links and cart (right for desktop) */}
        <div className="hidden md:flex md:space-x-4">
          <>
            {login ? (
              <NavLink className={"font-bold"} to="/">
                {acount.userName}
              </NavLink>
            ) : null}
          </>
          <>{login ? <NavLink to="/my-orders">My Orders</NavLink> : null}</>

          <NavLink
            to={login ? "/my-account" : "/sign-in"}
            className=" flex items-center gap-2 space-x-1 cursor-pointer font-bold transition-colors duration-300 hover:bg-blue-600"
          >
            {login ? <FaUser /> : <FaSignInAlt />}
            {login ? "My Account" : "Login"}
          </NavLink>

          <>
            {login ? (
              <NavLink
                to="/my-order"
                className="flex items-center space-x-1 cursor-pointer"
              >
                <FaShoppingCart />
                <span>{countCart}</span>
              </NavLink>
            ) : null}
          </>
        </div>

        {/* Fondo borroso cuando el menú móvil está abierto */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black opacity-50 backdrop-blur-md z-20"></div>
        )}

        {/* Mobile menu */}
        <div
          className={`transform top-0 right-0 w-1/2 h-full fixed ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out bg-gray-900 text-white p-4 overflow-y-hidden z-30 md:hidden`}
        >
          {/* Encabezado del menú móvil */}
          <div className="flex justify-end mb-4">
            <button onClick={() => setIsMenuOpen(false)}>
              <FaTimes className="text-2xl" />
            </button>
          </div>

          {/* Links para móvil */}
          <div className="flex flex-col space-y-6">
            <NavLink
              to="/"
              onClick={newCategory}
              className={({ isActive }) => {
                return isActive
                  ? activeStyle
                  : "text-white hover:text-blue-400";
              }}
            >
              <FaBoxOpen className="mr-2 inline" />
              All
            </NavLink>
            {[
              {
                path: "/clothes",
                label: "Clothes",
                icon: <FaTshirt className="mr-2" />,
              },
              {
                path: "/electronics",
                label: "Electronics",
                icon: <FaLaptop className="mr-2" />,
              },
              {
                path: "/Furniture",
                label: "furniture",
                icon: <FaCouch className="mr-2" />,
              },
              {
                path: "/shoes",
                label: "shoes",
                icon: <FaGamepad className="mr-2" />,
              },
              {
                path: "/others",
                label: "others",
                icon: <FaBoxOpen className="mr-2" />,
              },
            ].map(({ path, label, icon }, index) => (
              <NavLink
                key={path}
                onClick={newCategory}
                to={path}
                value={index + 1}
                className={({ isActive }) => {
                  return isActive
                    ? `${activeStyle} flex items-center`
                    : "text-white hover:text-blue-600 flex items-center";
                }}
              >
                {icon}
                <span>{label}</span>
              </NavLink>
            ))}
            <>
              {login ? (
                <NavLink
                  to="/my-orders"
                  className="flex items-center space-x-1 gap-1 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaClipboardList />
                  My Orders
                </NavLink>
              ) : null}
            </>

            <>
              {login ? (
                <div className="font-bold mt-4">@{acount.userName}</div>
              ) : null}
            </>
            <NavLink
              to={login ? "/my-account" : "/sign-in"}
              className="flex items-center space-x-1 gap-1 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {login ? <FaUser /> : <FaSignInAlt />}
              {login ? " My account" : " Login"}
            </NavLink>
            <>
              {login ? (
                <NavLink
                  to="/my-order"
                  className="flex items-center space-x-1 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaShoppingCart />
                  <span>{countCart}</span>
                </NavLink>
              ) : null}
            </>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

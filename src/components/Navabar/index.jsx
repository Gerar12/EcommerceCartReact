import { useState, useEffect, useContext } from "react";
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
} from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const { countCart } = useContext(EcommerContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeStyle = "underline underline-offset-4 text-yellow-400";
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Desactiva el scroll
    } else {
      document.body.style.overflow = "unset"; // Reactiva el scroll
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-gray-900 text-white top-0 p-4 fixed z-10 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-3xl font-extrabold text-white">
          ExpreStore
        </NavLink>

        {/* Mobile menu toggle button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links (centered for desktop) */}
        <div className="hidden md:flex md:space-x-4">
          {[
            "/",
            "/clothes",
            "/tegnology",
            "/fornitures",
            "/toys",
            "/orthers",
          ].map((path) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => {
                return isActive
                  ? activeStyle
                  : "text-white hover:text-yellow-400";
              }}
            >
              {path === "/" ? "All" : path.slice(1)}
            </NavLink>
          ))}
        </div>

        {/* User links and cart (right for desktop) */}
        <div className="hidden md:flex md:space-x-4">
          <NavLink to="/" className="font-bold hover:text-yellow-400">
            @user
          </NavLink>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => {
              return isActive
                ? activeStyle
                : "text-white hover:text-yellow-400";
            }}
          >
            My Orders
          </NavLink>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => {
              return isActive
                ? activeStyle
                : "text-white hover:text-yellow-400";
            }}
          >
            Sign In
          </NavLink>
          <div className="flex items-center space-x-1">
            <FaShoppingCart />
            <span>{countCart}</span>
          </div>
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
            {[
              { path: "/", label: "All", icon: <FaBoxOpen className="mr-2" /> },
              {
                path: "/clothes",
                label: "Clothes",
                icon: <FaTshirt className="mr-2" />,
              },
              {
                path: "/tegnology",
                label: "Tegnology",
                icon: <FaLaptop className="mr-2" />,
              },
              {
                path: "/fornitures",
                label: "Fornitures",
                icon: <FaCouch className="mr-2" />,
              },
              {
                path: "/toys",
                label: "Toys",
                icon: <FaGamepad className="mr-2" />,
              },
              {
                path: "/orthers",
                label: "Orthers",
                icon: <FaBoxOpen className="mr-2" />,
              },
              {
                path: "/my-orders",
                label: "My Orders",
                icon: <FaClipboardList className="mr-2" />,
              },
              {
                path: "/sign-in",
                label: "Sign In",
                icon: <FaSignInAlt className="mr-2" />,
              },
            ].map(({ path, label, icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => {
                  return isActive
                    ? `${activeStyle} flex items-center`
                    : "text-white hover:text-yellow-400 flex items-center";
                }}
              >
                {icon}
                <span>{label}</span>
              </NavLink>
            ))}
            <div className="font-bold mt-4">@user</div>
            <div className="flex items-center space-x-2 mt-4">
              <FaShoppingCart className="mr-2" />
              <span>{countCart}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

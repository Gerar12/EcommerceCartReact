import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 md:p-6 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <div className="mb-2 text-blue-400 flex justify-center items-center">
          <span className="text-lg">Crafted with </span>
          <FaHeart className="mx-2 text-red-500 animate-pulse" />
          <span className="text-lg">by Gerar</span>
        </div>
        <div className="text-sm text-blue-300">
          All rights reserved &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

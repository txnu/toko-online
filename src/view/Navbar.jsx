import { useState } from "react";
import logoProduct from "../assets/icons/product.png";
import logoHome from "../assets/icons/home.png";
import logoAuth from "../assets/icons/auth.png";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center px-4 py-2 rounded-full sm:px-20">
        <div className="flex items-center">
          <img
            src={logoHome}
            alt=""
            className="animate-pulse"
            style={{
              height: "30px",
              width: "30px",
            }}
          />
          <a
            href="/"
            className="pl-4 text-md text-center font-bold sm:text-2xl sm:text-left"
          >
            Kedai Programmer
          </a>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleSidebar} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div className="hidden sm:flex space-x-4">
          <a href="/" className="flex flex-col items-center">
            <img src={logoHome} alt="home" className="object-center h-6 w-6" />
            <span className="pt-1 text-xs">Dashboard</span>
          </a>

          <a href="/product" className="flex flex-col items-center">
            <img
              src={logoProduct}
              alt="product"
              className="object-center h-6 w-6"
            />
            <span className="pt-1 text-xs">Product</span>
          </a>

          <a href="" className="flex flex-col items-center">
            <img src={logoAuth} alt="auth" className="object-center h-6 w-6" />
            <span className="pt-1 text-xs">Login/Register</span>
          </a>
        </div>

        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleSidebar}
        ></div>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white transform z-50 transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col p-4">
            <a href="/" className="flex items-center py-2">
              <img
                src={logoHome}
                alt="home"
                className="object-center h-6 w-6"
              />
              <span className="pl-2 text-sm">Dashboard</span>
            </a>

            <a href="/product" className="flex items-center py-2">
              <img
                src={logoProduct}
                alt="product"
                className="object-center h-6 w-6"
              />
              <span className="pl-2 text-sm">Product</span>
            </a>

            <a href="/login" className="flex items-center py-2">
              <img
                src={logoAuth}
                alt="auth"
                className="object-center h-6 w-6"
              />
              <span className="pl-2 text-sm">Login/Register</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;

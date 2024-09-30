import { useState, useRef, useEffect } from "react";

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          Sort
          <svg
            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm font-medium text-gray-900"
              role="menuitem"
            >
              Most Popular
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500"
              role="menuitem"
            >
              Best Rating
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500"
              role="menuitem"
            >
              Newest
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500"
              role="menuitem"
            >
              Price: Low to High
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500"
              role="menuitem"
            >
              Price: High to Low
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;

import PropTypes from "prop-types";

function CloseMenu({ toggleFilters }) {
  return (
    <button
      type="button"
      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
      onClick={toggleFilters}
    >
      <span className="sr-only">Close menu</span>
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

CloseMenu.propTypes = {
  toggleFilters: PropTypes.func.isRequired, // Validate that toggleFilters is a required function
};

export default CloseMenu;

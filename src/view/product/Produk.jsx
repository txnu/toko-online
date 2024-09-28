import ProdukCard from "../../component/cards/product_card";

function Product() {
  return (
    <>
      <div className="mx-28 bg-white">
        <div className="flex flex-row justify-between">
          <div className="mt-6">
            <div className="pt-6" id="filter-section-1">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="filter-category-0"
                    name="category[]"
                    value="new-arrivals"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-category-0"
                    className="ml-3 text-sm text-gray-600"
                  >
                    New Arrivals
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-category-1"
                    name="category[]"
                    value="sale"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-category-1"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Sale
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-category-3"
                    name="category[]"
                    value="organization"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-category-3"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Travel
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-category-3"
                    name="category[]"
                    value="organization"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-category-3"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Organization
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-category-4"
                    name="category[]"
                    value="accessories"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="filter-category-4"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Accessories
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProdukCard />
            <ProdukCard />
            <ProdukCard />
            <ProdukCard />
            <ProdukCard />
            <ProdukCard />
            <ProdukCard />
            <ProdukCard />
            <ProdukCard />
            <ProdukCard />
            <ProdukCard />
            <ProdukCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

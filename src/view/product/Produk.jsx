// import ProdukCard from "../../component/cards/product_card";

import { useState } from "react";
import CloseMenu from "../../component/buttons/closemenu_button";
import Filters from "../../component/buttons/filters_button";
import ViewGrid from "../../component/buttons/viewgrid_button";
import ProdukCard from "../../component/cards/product_card";
import SortDropdown from "../../component/dropdown/sort_dropdown";
import CategoriesForm from "../../component/forms/categories_form";
import FilterSection from "../../component/forms/filters_form";

function Product() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Function to toggle the filters menu
  const toggleFilters = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <>
      <div className="h-max bg-white">
        <div>
          {/* Mobile Filters Menu */}
          {isFilterOpen && (
            <div
              className="relative z-40 lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div
                className="fixed inset-0 bg-black bg-opacity-25"
                aria-hidden="true"
              ></div>

              <div className="fixed inset-0 z-40 flex pt-14">
                <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <CloseMenu toggleFilters={toggleFilters} />
                  </div>

                  {/* <!-- Filters --> */}
                  <FilterSection />
                </div>
              </div>
            </div>
          )}

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
              <h1></h1>

              <div className="flex items-center">
                <SortDropdown />

                <ViewGrid />
                <Filters toggleFilters={toggleFilters} />
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* <!-- Filters --> */}
                <div className="lg:col-span-1">
                  <CategoriesForm />
                </div>

                <div className="lg:col-span-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
                    <ProdukCard />
                    <ProdukCard />
                    <ProdukCard />
                    <ProdukCard />
                    <ProdukCard />
                    <ProdukCard />
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Product;

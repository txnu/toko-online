import ProdukCard from "../../component/cards/product_card";
import Hero from "./view/hero";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="pt-16 py-10 mx-20 sm:py-20 items-center">
        <div className="grid grid-cols-1 items-center mx-2 sm:grid-cols-2 sm:px-8 sm:mx-28 md:grid-cols-3">
          <div className="items-center text-center">
            <p className="text-md text-gray-400 mb-2">Pengguna Terdaftar</p>
            <h1 className="text-black text-4xl font-semibold pb-10 sm:pb-0">
              1,234,567
            </h1>
          </div>
          <div className="items-center text-center">
            <p className="text-md text-gray-400 mb-2">Total Produk</p>
            <h1 className="text-black text-4xl font-semibold pb-10 sm:pb-0">
              1,234,567
            </h1>
          </div>
          <div className="items-center text-center">
            <p className="text-md text-gray-400 mb-2">Klien</p>
            <h1 className="text-black text-4xl font-semibold pb-10 sm:pb-0">
              123
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Produk Terbaru
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProdukCard />
            <ProdukCard />
            <ProdukCard />
            <ProdukCard />
            <ProdukCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

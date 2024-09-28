import banner from "../../../assets/images/banner.jpg";

function Hero() {
  return (
    <div
      className="relative w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${banner})`,
        height: "400px",
      }}
    >
      <div className="text-center w-full">
        <h2 className="text-3xl mb-6 mx-10">Cari Produk Pilihan Anda</h2>
        <div className="relative w-6/12 mx-auto">
          <input
            type="text"
            placeholder="Masukkan nama produk"
            className="px-4 py-2 md:py-3 w-full  text-black rounded-2xl focus:outline-none"
          />
          <button className="absolute mt-2 right-2 top-0 md:mt-3 md:mr-3 text-black">
            🔍
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0w-full flex justify-center transform translate-y-6 ">
        <div className="bg-black text-white  text-sm px-2 py-4 rounded-md shadow-lg sm:text-base">
          {/* Tambahkan menu di sini */}
          <ul className="flex space-x-0 sm:space-x-1">
            <li>
              <a
                href="#"
                className="hover:bg-white hover:text-black px-2 py-2 sm:px-4 sm:py-3  rounded-md "
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-3 rounded-md hover:bg-white hover:text-black"
              >
                Elektronik
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" px-4 py-3 rounded-md hover:bg-white hover:text-black"
              >
                Dapur
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" px-4 py-3 rounded-md hover:bg-white hover:text-black"
              >
                Otomotif
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" px-4 py-3 rounded-md hover:bg-white hover:text-black"
              >
                Survival
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;

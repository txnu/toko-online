import logoProduct from "../assets/icons/product.png";
import logoHome from "../assets/icons/home.png";
import logoAuth from "../assets/icons/auth.png";

const NavigationBar = () => {
  return (
    <div className="px-2 sm:px-20 sticky top-0 z-50 bg-white">
      <div className="flex flex-row justify-between px-6 py-2 rounded-full">
        <div className="flex flex-auto justify-start items-center">
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
            className="pl-4 text-md text-center sm:text-left font-bold sm:text-2xl"
          >
            Kedai Programmer
          </a>
        </div>

        <div className="flex space-x-2">
          <a href="/" className="px-2 text-sm">
            <div className="flex flex-col items-center">
              <img
                src={logoHome}
                alt="logo"
                style={{
                  height: "20px",
                  width: "20px",
                  marginBottom: "3px",
                }}
              />
              <span>Dashboard</span>
            </div>
          </a>

          <a href="/produk" className="px-2 text-sm">
            <div className="flex flex-col items-center">
              <img
                src={logoProduct}
                alt="logo"
                style={{
                  height: "20px",
                  width: "20px",
                  marginBottom: "3px",
                }}
              />
              <span>Product</span>
            </div>
          </a>

          <a href="" className="px-2 text-sm">
            <div className="flex flex-col items-center">
              <img
                src={logoAuth}
                alt="logo"
                style={{
                  height: "20px",
                  width: "20px",
                  marginBottom: "3px",
                }}
              />
              <span>Login/Register</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;

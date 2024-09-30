// import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavigationBar from "./component/navbar/Navbar";
import Dashboard from "./view/dashboard/Dashboard";
import Product from "./view/product/Produk";
import Footer from "./component/footer/Footer";
import LoginForm from "./view/auth/Login";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login"]; // Add routes where you don't want the navbar

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <NavigationBar />}
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;

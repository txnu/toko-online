// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./view/Navbar";
import Dashboard from "./view/dashboard/Dashboard";
import Product from "./view/product/Produk";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Layouts from "./components/layouts/Layouts";
import HomePage from "./pages/home/HomePage";
import "../src/assets/Global.css";
import AboutPage from "./pages/about/AboutPage";
import ProductsPage from "./pages/products/ProductsPage";
import CollectionsPage from "./pages/collection/CollectionsPage";
import Sale from "./pages/sale/Sale";
import ContactPage from "./pages/contact/ContactPage";
import ProductDetail from "./components/productDetail/ProductDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="productsDetail" element={<ProductDetail />} />
          <Route path="collections" element={<CollectionsPage />} />
          <Route path="sale" element={<Sale />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

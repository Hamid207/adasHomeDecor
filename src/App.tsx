import { Route, Routes } from "react-router-dom";
import Layouts from "./components/layouts/Layouts";
import HomePage from "./pages/home/HomePage";
import "../src/assets/Global.css";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Collections from "./pages/collection/Collections";
import Sale from "./pages/sale/Sale";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="collections" element={<Collections />} />
          <Route path="sale" element={<Sale />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

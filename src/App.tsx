import { Route, Routes } from "react-router-dom";
import Layouts from "./components/layouts/Layouts";
import HomePage from "./pages/home/HomePage";
import "../src/assets/Global.css";
import About from "./pages/about/About";
import Products from "./pages/products/Products";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

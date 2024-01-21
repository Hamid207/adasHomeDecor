import { Route, Routes } from "react-router-dom";
import Layouts from "./components/layouts/Layouts";
import HomePage from "./pages/home/HomePage";
import "../src/assets/Global.css";
import AboutPage from "./pages/about/AboutPage";
import ProductsPage from "./pages/products/ProductsPage";
import CollectionsPage from "./pages/collection/CollectionsPage";
import ContactPage from "./pages/contact/ContactPage";
import ProductDetail from "./components/productDetail/ProductDetail";
import LogInLayout from "./components/layouts/logIN/LogInLayout";

import ResetPasswordPage from "./pages/logIn/resetPasswordPage/ResetPasswordPage";
import LogInPage from "./pages/logIn/loginPage/LogInPage";
import VerificationPage from "./pages/logIn/verificationPage/VerificationPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/productsDetail" element={<ProductDetail />} />
          <Route path="collections" element={<CollectionsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        <Route path="/login" element={<LogInLayout />}>
          <Route index element={<LogInPage />} />
          <Route path="resetpass" element={<ResetPasswordPage />} />
          <Route path="verificationpage" element={<VerificationPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

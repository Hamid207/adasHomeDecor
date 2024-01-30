import { Route, Routes } from "react-router-dom";
import Layouts from "./components/layouts/Layouts";
import HomePage from "./pages/home/HomePage";
import "../src/assets/Global.css";
import AboutPage from "./pages/about/AboutPage";
import ProductsPage from "./pages/products/ProductsPage";
import CollectionsPage from "./pages/collection/CollectionsPage";
import ContactPage from "./pages/contact/ContactPage";
import ProductDetail from "./components/productDetail/ProductDetail";
import LogInLayout from "./components/layouts/logInLayout/LogInLayout";

import ResetPasswordPage from "./pages/logIn/resetPasswordPage/ResetPasswordPage";
import LogInPage from "./pages/logIn/loginPage/LogInPage";
import VerificationPage from "./pages/logIn/verificationPage/VerificationPage";
import NewPasswordPage from "./pages/logIn/newPasswordPage/NewPasswordPage";
import RegisterPage from "./pages/logIn/registerPage/RegisterPage";
import MyAccountLayout from "./components/layouts/myAccountLayout/MyAccountLayout";
import WishlistPage from "./pages/myAcoutnPage/WishlistPage/WishlistPage";
import PersonaInformation from "./pages/myAcoutnPage/personalInformation/PersonaInformation";
import ShoppingCartPage from "./pages/shoppingCartPage/ShoppingCartPage";

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
          <Route path="shoppingcart" element={<ShoppingCartPage />} />
          <Route path="/myaccount" element={<MyAccountLayout />}>
            <Route index element={<PersonaInformation />} />
            <Route path="wishlist" element={<WishlistPage />} />
          </Route>
        </Route>

        <Route element={<LogInLayout />}>
          <Route path="/login" element={<LogInPage />} />
          <Route path="/resetpass" element={<ResetPasswordPage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/newpassword" element={<NewPasswordPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

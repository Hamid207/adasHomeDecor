import AboutUs from "../../components/aboutUs/AboutUs";
import MainImageAndText from "../../components/mainImageAndText/MainImageAndText";
import Discount from "../../components/discount/Discount";
import Products from "../../components/products/Products";

const HomePage = () => {
  return (
    <>
      <section>
        <MainImageAndText />
      </section>
      <section>{/*swipe*/}</section>
      <section>
        <AboutUs />
      </section>
      <section>
        <Discount />
      </section>
      <section>
        <Products />
      </section>
    </>
  );
};

export default HomePage;

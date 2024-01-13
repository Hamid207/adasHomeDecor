import AboutUs from "../../components/aboutUs/AboutUs";
import MainImageAndText from "../../components/mainImageAndText/MainImageAndText";
import Discount from "../../components/discount/Discount";
import Products from "../../components/products/Products";
import CollectionSlider from "../../components/sliders/collectionSlider/CollectionSlider";
import Contact from "../../components/contact/Contact";

const HomePage = () => {
  return (
    <>
      <MainImageAndText />
      <CollectionSlider name="" />
      <AboutUs pageName="home" />
      <Discount />
      <Products />
      <CollectionSlider name="MOST POPULAR" />
      <CollectionSlider name="COLLECTIONS" />
      <Contact pageName="home" />
    </>
  );
};

export default HomePage;

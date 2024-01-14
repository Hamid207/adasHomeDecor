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
      <CollectionSlider name="" isHidden={false} width="330px" height="195px" />
      <AboutUs pageName="home" />
      <Discount />
      <Products />
      <CollectionSlider
        name="MOST POPULAR"
        isHidden={false}
        width="330px"
        height="195px"
      />
      <CollectionSlider
        name="COLLECTIONS"
        isHidden={false}
        width="330px"
        height="195px"
      />
      <Contact pageName="home" />
    </>
  );
};

export default HomePage;

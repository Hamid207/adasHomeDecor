import AboutUs from "../../components/aboutUs/AboutUs";
import MainImageAndText from "../../components/mainImageAndText/MainImageAndText";
import Discount from "../../components/discount/Discount";
import Products from "../../components/products/Products";
import CollectionSlider from "../../components/sliders/collectionSlider/CollectionSlider";

const HomePage = () => {
  return (
    <>
      <section>
        <MainImageAndText />
      </section>
      <section>
        <CollectionSlider name="" />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <Discount />
      </section>
      <section>
        <Products />
      </section>
      <section>
        <CollectionSlider name="MOST POPULAR" />
      </section>
      <section>
        <CollectionSlider name="COLLECTIONS" />
      </section>
    </>
  );
};

export default HomePage;

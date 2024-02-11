import AboutUs from "../../components/aboutUs/AboutUs";
import MainImageAndText from "../../components/mainImageAndText/MainImageAndText";
import Discount from "../../components/discount/Discount";
import Products from "../../components/products/Products";
import CollectionSlider from "../../components/sliders/collectionSlider/CollectionSlider";
import Contact from "../../components/contact/Contact";
import CollectionsGrid from "../../components/collections/collectionsGrid/CollectionsGrid";
import { SwiperSlide } from "swiper/react";
import ProductsGrid from "../../components/products/productsGrid/ProductsGrid";

import "../../components/sliders/collectionSlider/CollectionSilder.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";

interface Categorie {
  id: number;
  catTitle: string;
  image: string;
}

const HomePage = () => {
  const categories = useSelector((state: RootState) => state.categories);
  return (
    <>
      <MainImageAndText />
      <CollectionSlider
        name=""
        isHidden={false}
        height="190px"
        width="330px"
        seeAllIshidden={true}
      >
        {categories.map((categorie: Categorie) => {
          return (
            <SwiperSlide className="res-slide">
              <CollectionsGrid
                name={categorie.catTitle}
                height="195px"
                width="330px"
                isHidden
                img={categorie.image}
              />
            </SwiperSlide>
          );
        })}
      </CollectionSlider>
      <AboutUs pageName="home" />
      <Discount />
      <Products />
      {/* <CollectionSlider
        name="MOST POPULAR"
        isHidden={false}
        width="330px"
        height="195px"
        // type={Slider.products}
      >
        <SwiperSlide>
          <ProductsGrid />
        </SwiperSlide>

      </CollectionSlider> */}

      {/* <CollectionSlider
        name="COLLECTIONS"
        isHidden={false}
        width="330px"
        height="195px"
        // type={Slider.collection}
      /> */}
      <Contact pageName="home" />
    </>
  );
};

export default HomePage;

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
import { Categorie } from "../../services/categories.service";
import { Product } from "../../services/products.service";

const HomePage = () => {
  const categories = useSelector((state: RootState) => state.categories);
  const products = useSelector((state: RootState) => state.productts);
  return (
    <>
      <MainImageAndText />
      <CollectionSlider name="" isHidden={false} seeAllIshidden={true}>
        {categories.map((categorie: Categorie) => {
          return (
            <SwiperSlide key={categorie.id} className="res-slide">
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
      <CollectionSlider
        name="MOST POPULAR"
        isHidden={false}
        seeAllIshidden={true}
      >
        {products
          .filter((product: Product) => product.views > 80)
          .map((product: Product) => {
            return (
              <SwiperSlide key={product.id} className="res-slide">
                <ProductsGrid
                  name={product.title}
                  height="267px"
                  width="330px"
                  img={product.image}
                />
              </SwiperSlide>
            );
          })}
      </CollectionSlider>
      <CollectionSlider
        name="MOST POPULAR"
        isHidden={false}
        seeAllIshidden={true}
      >
        {products.map((product: Product) => {
          return (
            <SwiperSlide key={product.id} className="res-slide">
              <ProductsGrid
                name={product.title}
                height="267px"
                width="330px"
                img={product.image}
              />
            </SwiperSlide>
          );
        })}
      </CollectionSlider>
      <Contact pageName="home" />
    </>
  );
};

export default HomePage;

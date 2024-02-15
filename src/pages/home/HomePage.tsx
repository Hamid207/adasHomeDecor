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
import { Collection } from "../../services/collections.service";

const HomePage = () => {
  const categories = useSelector((state: RootState) => state.categories);
  const products = useSelector((state: RootState) => state.productts);
  const collections = useSelector((state: RootState) => state.collections);
  return (
    <>
      <MainImageAndText />
      <CollectionSlider
        name=""
        isHidden={false}
        seeAllIshidden={true}
        marginTop="-120px"
        backColor=""
        height=""
      >
        {categories.map((categorie: Categorie) => {
          return (
            <SwiperSlide
              key={categorie.id}
              className="res-slide"
              style={{ maxWidth: "330px" }}
            >
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
        marginTop=""
        backColor=""
        height=""
      >
        {products
          .filter((product: Product) => product.views > 80)
          .map((product: Product) => {
            return (
              <SwiperSlide
                key={product.id}
                className="res-slide"
                style={{ maxWidth: "330px" }}
              >
                <ProductsGrid
                  name={product.title}
                  height="267px"
                  width="330px"
                  img={product.image}
                  price={product.price}
                  id={product.id}
                />
              </SwiperSlide>
            );
          })}
      </CollectionSlider>
      <CollectionSlider
        name="COLLECTIONS"
        isHidden={false}
        seeAllIshidden={false}
        marginTop="100px"
        height="500px"
        backColor=""
      >
        {collections.map((collection: Collection) => {
          return (
            <SwiperSlide
              key={collection.id}
              className="res-slide"
              style={{ maxWidth: "440px" }}
            >
              <CollectionsGrid
                name={collection.colTitle}
                height="267px"
                width="700px"
                isHidden
                img={collection.image}
              />
            </SwiperSlide>
          );
        })}
      </CollectionSlider>
      <Contact pageName="home" marginTop="120px" />
    </>
  );
};

export default HomePage;

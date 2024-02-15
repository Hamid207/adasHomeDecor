import { useEffect, useState } from "react";
import CollectionSlider from "../sliders/collectionSlider/CollectionSlider";
import CustomLink from "../ui/customLink/CustomLink";
import style from "./ProductDetail.module.css";
import { Product, ProductsService } from "../../services/products.service";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { SwiperSlide } from "swiper/react";
import ProductsGrid from "../products/productsGrid/ProductsGrid";

const ProductDetail = () => {
  const products = useSelector((state: RootState) => state.productts);

  const { id } = useParams() as { id: string };

  const [detail, setDetail] = useState<Product>({
    id: 0,
    collectionId: 0,
    categoriesId: 0,
    image: "",
    title: "",
    desc: "",
    price: "",
    views: 0,
  });

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const data = await ProductsService.getById(id);
      setDetail(data);
    };

    fetchData();
  }, [id]);

  window.scrollTo(0, 0);
  return (
    <>
      <section className={style.body}>
        <div className={style.navigation_title_body}>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>{detail.title}</li>
          </ul>
        </div>
        <div className={style.deail_body}>
          <div className={style.images_body}>
            <div className={style.img_body}>
              <div>
                {/* <img src="/public/main/sofa.png" alt="" /> */}
                <img src={detail.image} alt="" />
              </div>
            </div>
            <div className={style.mini_slider}>
              <CollectionSlider name="" isHidden={true} seeAllIshidden>
                {products
                  .filter((product: Product) => product.id < 4)
                  .map((product: Product) => {
                    return (
                      <SwiperSlide
                        key={product.id}
                        className="res-slide"
                        style={{ maxWidth: "195px" }}
                      >
                        <div className={style.images}>
                          <img src={product.image} alt="" />
                          <p>1212122</p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </CollectionSlider>
            </div>
          </div>

          <div className={style.product_info}>
            <h2>{detail.title}</h2>
            <p className={style.main_info}>{detail.desc}</p>
            <p className={style.colors_text}>COLORS</p>
            <div className={style.color_button}>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div className={style.product_count}>
              <button>+</button>
              <p>0</p>
              <button>-</button>
            </div>
            <h3 className={style.price}>{detail.price}$</h3>
            <div className={style.buttons_body}>
              <CustomLink
                to=""
                text="BUY NOW"
                width="330px"
                height="54px"
                backColor="brown"
                hidden={true}
              />
              <CustomLink
                to=""
                text="ADD TO CART"
                width="330px"
                height="54px"
                backColor="none"
                hidden={true}
              />
            </div>
          </div>
        </div>
        <div className={style.slider_body}>
          <CollectionSlider
            name="SIMILAR PRODUCTS"
            isHidden={true}
            seeAllIshidden
          >
            {products.map((product: Product) => {
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
        </div>
      </section>
      <section>
        <div></div>
      </section>
    </>
  );
};

export default ProductDetail;

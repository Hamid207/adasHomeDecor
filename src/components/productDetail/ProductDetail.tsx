import { useEffect, useState } from "react";
import CollectionSlider from "../sliders/collectionSlider/CollectionSlider";
import CustomLink from "../ui/customLink/CustomLink";
import style from "./ProductDetail.module.css";
import { Product, ProductsService } from "../../services/products.service";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../../store/Store";
import { SwiperSlide } from "swiper/react";
import ProductsGrid from "../products/productsGrid/ProductsGrid";
import {
  ShoppingCartModel,
  ShoppingCartService,
} from "../../services/shoppingCart.service";
import { fetchShoppingCart } from "../../store/slices/shoppingCartSlice";

const ProductDetail = () => {
  const products = useSelector((state: RootState) => state.productts);
  const shoppingCarts = useSelector((state: RootState) => state.shoppingCart);
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
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const data = await ProductsService.getById(id);
      setDetail(data);
      setPrice(Number(data.price));
    };

    fetchData();
  }, [id]);

  window.scrollTo(0, 0);

  const addToShoppingCarts = () => {
    const chekShoppingCart = shoppingCarts.find(
      (cart: ShoppingCartModel) => cart.id == Number(id)
    );

    if (!chekShoppingCart) {
      const fetchData = async () => {
        await ShoppingCartService.postShoppingCart({
          id: Number(id),
          title: detail.title,
          image: detail.image,
          price: detail.price,
          count: count,
          countPrice: price,
        });
      };
      fetchData();
      setTimeout(() => {
        store.dispatch(fetchShoppingCart());
      }, 1000);
    }
  };

  const plusButton = () => {
    setCount(count + 1);
    setPrice(price + Number(detail.price));
  };

  const minusButton = () => {
    setCount(count - 1);
    setPrice(price - Number(detail.price));
  };

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
              <CollectionSlider
                name=""
                isHidden={true}
                seeAllIshidden
                marginTop=""
                backColor=""
                height=""
              >
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
              <button onClick={plusButton}>+</button>
              <p>{count}</p>
              <button onClick={minusButton} disabled={count === 1}>
                -
              </button>
            </div>
            <h3 className={style.price}>{price.toString()}$</h3>
            <div className={style.buttons_body}>
              <CustomLink
                to=""
                text="BUY NOW"
                width="330px"
                height="54px"
                backColor="brown"
                hidden={true}
              />

              <button className={style.button} onClick={addToShoppingCarts}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className={style.slider_body}>
          <CollectionSlider
            name="SIMILAR PRODUCTS"
            isHidden={true}
            seeAllIshidden
            marginTop=""
            backColor=""
            height=""
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
                    desc={product.desc}
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

import CollectionSlider from "../sliders/collectionSlider/CollectionSlider";
import CustomLink from "../ui/customLink/CustomLink";
import style from "./ProductDetail.module.css";

const ProductDetail = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <section className={style.body}>
        <div className={style.navigation_title_body}>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Grayson Premium Grey Wash Nest of Tables</li>
          </ul>
        </div>
        <div className={style.deail_body}>
          <div className={style.img_body}>
            <div>
              <img src="/public/main/sofa.png" alt="" />
            </div>

            <CollectionSlider
              name=""
              isHidden={true}
              height="100px"
              width="194px"
            />
          </div>
          <div className={style.product_info}>
            <h2>GRAYSON PREMIUM GREY WASH NEST OF TABLES</h2>
            <p className={style.main_info}>
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae.
            </p>
            <p className={style.colors_text}>COLORS</p>

            <div className={style.product_count}>
              <button>+</button>
              <p>0</p>
              <button>-</button>
            </div>
            <h3 className={style.price}>140$</h3>
            <div className={style.buttons_body}>
              <CustomLink
                to=""
                text="BUY NOW"
                width="330px"
                height="54px"
                backColor="brown"
                hidden={false}
              />
              <CustomLink
                to=""
                text="ADD TO CART"
                width="330px"
                height="54px"
                backColor="none"
                hidden={false}
              />
            </div>
          </div>
        </div>
        <div className={style.slider_body}>
          <CollectionSlider
            name="SIMILAR PRODUCTS"
            isHidden={false}
            height="267px"
            width="330px"
          />
        </div>
      </section>
      <section>
        <div></div>
      </section>
    </>
  );
};

export default ProductDetail;

import { useEffect, useState } from "react";
import CollectionSlider from "../sliders/collectionSlider/CollectionSlider";
import CustomLink from "../ui/customLink/CustomLink";
import style from "./ProductDetail.module.css";
import { Product, ProductsService } from "../../services/products.service";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
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
          <div className={style.img_body}>
            <div>
              {/* <img src="/public/main/sofa.png" alt="" /> */}
              <img src={detail.image} alt="" />
            </div>

            <CollectionSlider name="" isHidden={true} children seeAllIshidden />
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
          <CollectionSlider name="" isHidden={true} children seeAllIshidden />
        </div>
      </section>
      <section>
        <div></div>
      </section>
    </>
  );
};

export default ProductDetail;

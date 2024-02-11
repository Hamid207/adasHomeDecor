import { Link } from "react-router-dom";
import style from "./ProductsGrid.module.css";

interface ProductCard {
  name: string;
  width: string;
  height: string;
  img: string;
}

const ProductsGrid = (props: ProductCard) => {
  return (
    <div>
      <Link to="/products/productsDetail" className={style.link}>
        <div
          className={style.back_img_body}
          style={{
            backgroundImage: `url(${props.img})`,
            width: props.width,
            height: props.height,
          }}
        >
          <button className={style.like_button}>
            <div className={style.img_body}>
              <img src="/public/main/like.png" alt="" className={style.img} />
            </div>
          </button>
        </div>
        <p className={style.text}>Grayson Premium Grey Wash Nest of Tables</p>
        <p className={style.price}>140$</p>
      </Link>
    </div>
  );
};

export default ProductsGrid;

import { Link } from "react-router-dom";
import style from "./ProductsGrid.module.css";

interface ProductCard {
  name: string;
  width: string;
  height: string;
  img: string;
  price: string;
  id: number;
}

const ProductsGrid = (props: ProductCard) => {
  return (
    <div>
      <Link to={`/products/productsDetail/${props.id}`} className={style.link}>
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
        <p className={style.text}>{props.name}</p>
        <p className={style.price}>{props.price} $</p>
      </Link>
    </div>
  );
};

export default ProductsGrid;

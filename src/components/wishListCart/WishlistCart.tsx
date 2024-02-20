import { Link } from "react-router-dom";
import style from "./Wishlist.module.css";

interface WishlistItem {
  name: string;
  price: string;
  image: string;
  id: number;
}

const WishlistCart = (props: WishlistItem) => {
  return (
    <div className={style.wishlist_cart_body}>
      <Link to={`/products/productsDetail/${props.id}`} className={style.link}>
        <div className={style.img_title_body}>
          <div className={style.img_body}>
            <img src={props.image} alt="" />
          </div>
          <div className={style.title_body}>
            <h3>{props.name}</h3>
            <p>{props.price}$</p>
          </div>
        </div>
      </Link>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
            fill="#B8926A"
          />
        </svg>
      </button>
    </div>
  );
};

export default WishlistCart;

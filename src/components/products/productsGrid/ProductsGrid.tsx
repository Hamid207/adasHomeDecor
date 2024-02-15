import { Link } from "react-router-dom";
import style from "./ProductsGrid.module.css";
import { useEffect, useState } from "react";

interface ProductCard {
  name: string;
  width: string;
  height: string;
  img: string;
  price: string;
  id: number;
}

const ProductsGrid = (props: ProductCard) => {
  const [likeBtn, setLikeBtn] = useState<boolean>(false);

  var likeBtnImg = "/public/main/like.png";

  const togle = () => {
    setLikeBtn(!likeBtn);
  };

  useEffect(() => {
    if (likeBtn == false) {
      likeBtnImg = "/public/main/like.png";
    } else {
      console.log(likeBtn);

      likeBtnImg = "/public/main/heart.png";
    }
  }, [likeBtn]);

  return (
    <div className={style.mian_body}>
      <Link to={`/products/productsDetail/${props.id}`} className={style.link}>
        <div className={style.mainImage_likeImage_body}>
          <div className={style.main_image_body}>
            <img src={props.img} alt="img" />
          </div>
        </div>
        <p className={style.text}>{props.name}</p>
        <p className={style.price}>{props.price} $</p>
      </Link>

      <button className={style.like_button} onClick={togle}>
        <div className={style.img}>
          {(likeBtn && <img src="/public/main/heart.png" alt="" />) || (
            <img src="/public/main/like.png" alt="" />
          )}
        </div>
      </button>
    </div>
  );
};

export default ProductsGrid;

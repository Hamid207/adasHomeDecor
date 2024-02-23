import { Link } from "react-router-dom";
import style from "./ProductsGrid.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, store } from "../../../store/Store";
import {
  FavoritesModel,
  FavoritesService,
} from "../../../services/favorites.service";
import { fetchFavorites } from "../../../store/slices/favoritesSlice";

interface ProductCard {
  name: string;
  width: string;
  height: string;
  img: string;
  price: string;
  desc: string;
  id: number;
}

const ProductsGrid = (props: ProductCard) => {
  const favorites = useSelector((state: RootState) => state.faforites);
  const [likeBtn, setLikeBtn] = useState<boolean>(false);

  const togle = () => {
    setLikeBtn(!likeBtn);
    const favorit = favorites.find(
      (favorit: FavoritesModel) => favorit.productId == props.id
    );

    if (!likeBtn && favorit == undefined) {
      const fetchData = async () => {
        await FavoritesService.getAddFavorites({
          image: props.img,
          price: props.price,
          title: props.name,
          desc: props.desc,
          productId: props.id,
        });

        //fetchFavorites - relaod wishlist
        store.dispatch(fetchFavorites());
      };

      fetchData();
    } else if (likeBtn && favorit != undefined) {
      // const fetchDelete = async () => {
      //   await FavoritesService.getDeleteFavorites(props.id);
      // };
      // fetchDelete();
    }
  };

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

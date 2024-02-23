import { useEffect, useState } from "react";
import {
  ShoppingCartModel,
  ShoppingCartService,
} from "../../services/shoppingCart.service";
import style from "./ShoppingCard.module.css";
import { useDispatch } from "react-redux";
import {
  totalPriceMinus,
  totalPricePlus,
} from "../../store/slices/shoppingCartItemsCountAndPriceCountSlice";
import { store } from "../../store/Store";
import { fetchShoppingCart } from "../../store/slices/shoppingCartSlice";

const ShoppingCard = (props: ShoppingCartModel) => {
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const dispatch = useDispatch();

  const plusButton = () => {
    setCount(count + 1);
    setPrice(price + Number(props.price));
    dispatch(totalPricePlus(Number(props.price)));
  };

  const minusButton = () => {
    setCount(count - 1);
    setPrice(price - Number(props.price));
    dispatch(totalPriceMinus(Number(props.price)));
  };

  useEffect(() => {
    setCount(props.count);
    setPrice(props.countPrice);
    dispatch(totalPricePlus(props.countPrice));
  }, []);

  const deleteShoppingCart = async () => {
    await ShoppingCartService.deleteShoppingCart(props.id);
    dispatch(totalPriceMinus(price));
    store.dispatch(fetchShoppingCart());
  };

  return (
    <div className={style.shoppingCard_body}>
      <button onClick={deleteShoppingCart}>X</button>
      <div className={style.img_and_text_body}>
        <div className={style.img_body}>
          <img src={props.image} alt="" />
        </div>
        <div className={style.main_text_body}>
          <p>{props.title}</p>
        </div>
      </div>
      <span></span>

      <div className={style.product_count}>
        <button onClick={plusButton}>+</button>
        <p>{count}</p>
        <button onClick={minusButton} disabled={count === 1}>
          -
        </button>
      </div>
      <h3>{price}$</h3>
    </div>
  );
};

export default ShoppingCard;

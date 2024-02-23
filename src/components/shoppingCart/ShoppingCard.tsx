import { useEffect, useState } from "react";
import { ShoppingCartModel } from "../../services/shoppingCart.service";
import style from "./ShoppingCard.module.css";
import { useDispatch } from "react-redux";
import {
  itemCountMinus,
  itemCountPlus,
} from "../../store/slices/shoppingCartItemsCountAndPriceCountSlice";

const ShoppingCard = (props: ShoppingCartModel) => {
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const dispatch = useDispatch();

  const plusButton = () => {
    setCount(count + 1);
    setPrice(price + Number(props.price));
    dispatch(itemCountPlus(Number(props.price)));
  };

  const minusButton = () => {
    setCount(count - 1);
    setPrice(price - Number(props.price));
    dispatch(itemCountMinus(Number(props.price)));
  };

  useEffect(() => {
    setCount(props.count);
    setPrice(props.countPrice);
    dispatch(itemCountPlus(props.countPrice));
  }, []);

  return (
    <div className={style.shoppingCard_body}>
      <button>X</button>
      <div className={style.img_and_text_body}>
        <div className={style.img_body}>
          {/* <img src="/public/main/sofa.png" alt="" /> */}
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

import { useEffect, useState } from "react";
import { ShoppingCartModel } from "../../services/shoppingCart.service";
import style from "./ShoppingCard.module.css";

const ShoppingCard = (props: ShoppingCartModel) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(props.count);
  }, [count]);
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
        <button>+</button>
        <p>{count}</p>
        <button>-</button>
      </div>
      <h3>{props.price}$</h3>
    </div>
  );
};

export default ShoppingCard;

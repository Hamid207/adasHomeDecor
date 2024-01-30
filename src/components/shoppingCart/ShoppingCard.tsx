import style from "./ShoppingCard.module.css";

const ShoppingCard = () => {
  return (
    <div className={style.shoppingCard_body}>
      <button>X</button>
      <div className={style.img_and_text_body}>
        <div className={style.img_body}>
          <img src="/public/main/sofa.png" alt="" />
        </div>
        <div className={style.main_text_body}>
          <p>Grayson Premium Grey Wash Nest of Tables</p>
        </div>
      </div>
      <span></span>

      <div className={style.product_count}>
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </div>
      <h3>140$</h3>
    </div>
  );
};

export default ShoppingCard;

import { useState } from "react";
import style from "./chekoutPage.module.css";
import CustomLink from "../../components/ui/customLink/CustomLink";

const ChekoutPage = () => {
  const [pammentBtn, setPammentBtn] = useState<boolean>(true);
  const [deliverBtn, setDeliverBtn] = useState<boolean>(true);
  const [completeView, setCompleteView] = useState<boolean>(false);

  const handleSumbit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // const form = event.currentTarget;
  };
  return (
    <>
      <div className={style.navigation_title_body}>
        <ul>
          <li>Home</li>
          <li>Shopping cart</li>
          <li>Checkout</li>
        </ul>
      </div>
      <h2 className={style.body_title}>CHEKOUT</h2>
      <div className={style.main_body}>
        <div className={style.left}>
          <div>
            <p className={style.info_title} style={{ marginBottom: "30px" }}>
              PERSONAL INFORMATION
            </p>
            <div className={style.left_midl_body}>
              <form onSubmit={handleSumbit} className={style.left_inputs}>
                <input type="text" placeholder="NAME" />
                <input type="email" placeholder="EMAIL" />
                <input type="text" placeholder="CITY, STREET" />
                <p className={style.info_title} style={{ marginTop: "50px" }}>
                  PAYMENT METHOD
                </p>
                <div className={style.payment_method}>
                  <button
                    onClick={() => setPammentBtn(!pammentBtn)}
                    disabled={pammentBtn === true}
                  >
                    {(pammentBtn && (
                      <img src="/src/assets/chekoutIMg/c1.png" alt="" />
                    )) || <img src="/src/assets/chekoutIMg/c0.png" alt="" />}
                  </button>
                  <p>CARD</p>
                </div>
                <div className={style.payment_method}>
                  <button
                    onClick={() => setPammentBtn(!pammentBtn)}
                    disabled={pammentBtn === false}
                  >
                    {(pammentBtn && (
                      <img src="/src/assets/chekoutIMg/c0.png" alt="" />
                    )) || <img src="/src/assets/chekoutIMg/c1.png" alt="" />}
                  </button>
                  <p>CASH</p>
                </div>
              </form>
              <form onSubmit={handleSumbit} className={style.midl_inputs}>
                <input type="text" placeholder="SURNAME" />
                <input type="text" placeholder="+ 994 (__) ___ __ __" />
                <input type="text" placeholder="POSTAL CODE" />
                <p className={style.info_title} style={{ marginTop: "50px" }}>
                  DELIVERY METHOD
                </p>
                <div className={style.deliver_method}>
                  <button
                    onClick={() => setDeliverBtn(!deliverBtn)}
                    disabled={deliverBtn === true}
                  >
                    {(deliverBtn && (
                      <img src="/src/assets/chekoutIMg/c1.png" alt="" />
                    )) || <img src="/src/assets/chekoutIMg/c0.png" alt="" />}
                  </button>
                  <p>COURIER</p>
                </div>
                <div className={style.deliver_method}>
                  <button
                    onClick={() => setDeliverBtn(!deliverBtn)}
                    disabled={deliverBtn === false}
                  >
                    {(deliverBtn && (
                      <img src="/src/assets/chekoutIMg/c0.png" alt="" />
                    )) || <img src="/src/assets/chekoutIMg/c1.png" alt="" />}
                  </button>
                  <p>PICKUP</p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={style.right_body}>
          <p>CARD INFORMATION</p>
          <form onSubmit={handleSumbit} className={style.right_inputs}>
            <input type="text" placeholder="CARD NUMBER" />
            <input type="text" placeholder="EXPIRY DATE" />
            <input type="text" placeholder="CW" />
            <button onClick={() => setCompleteView(!completeView)}>
              FINISH ORDER
            </button>
          </form>
        </div>
      </div>
      {completeView && (
        <div className={style.complete_back_body}>
          <div className={style.complete_body}>
            <div className={style.back_btn_body}>
              <button onClick={() => setCompleteView(!completeView)}>
                <img src="/src/assets/ph_X.png" alt="" />
              </button>
            </div>
            <div className={style.complete_main_body}>
              <div>
                <h2>YOUR ORDER IS COMPLETE!</h2>
              </div>

              <div className={style.complete_text_body}>
                <p>
                  You will be receiving a confirmation email with order details.
                </p>
              </div>
              <CustomLink
                to="/"
                text="HOME PAGE"
                width="214px"
                height="44px"
                backColor="brown"
                hidden={true}
              ></CustomLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChekoutPage;

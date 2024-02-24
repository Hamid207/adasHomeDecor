import { useEffect, useState } from "react";
import style from "./chekoutPage.module.css";
import CustomLink from "../../components/ui/customLink/CustomLink";

type FormFields = {
  name: HTMLInputElement;
  email: HTMLInputElement;
  city: HTMLInputElement;
  surname: HTMLInputElement;
  phone: HTMLInputElement;
  postalCode: HTMLInputElement;
  expiaryDate: HTMLInputElement;
  cartNumber: HTMLInputElement;
  cw: HTMLInputElement;
};

const ChekoutPage = () => {
  const [pammentBtn, setPammentBtn] = useState<boolean>(true);
  const [deliverBtn, setDeliverBtn] = useState<boolean>(true);
  const [completeView, setCompleteView] = useState<boolean>(false);

  const [userName, setuserName] = useState<string>("");
  const [usereEmail, setUsereEmail] = useState<string>("");
  const [userCity, setUserCity] = useState<string>("");
  const [userSurname, setUserSurname] = useState<string>("");
  const [userPhone, setUserPhone] = useState<string>("");
  const [userPostalCode, setUserPostalCode] = useState<string>("");
  const [userExpiryDate, setUserExpiryDate] = useState<string>("");
  const [userCartNumber, setUserCartNumber] = useState<string>("");
  const [userCw, setUserCw] = useState<string>("");

  const [finishrderButtonIsDisable, setFinishrderButtonIsDisable] =
    useState<boolean>(false);

  const handleSumbit: React.FormEventHandler<HTMLFormElement & FormFields> = (
    event
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const {
      name,
      email,
      city,
      surname,
      phone,
      postalCode,
      expiaryDate,
      cartNumber,
      cw,
    } = form;
    setuserName(name.value);
    setUsereEmail(email.value);
    setUserCity(city.value);
    setUserSurname(surname.value);
    setUserPhone(phone.value);
    setUserPostalCode(postalCode.value);
    setUserExpiryDate(expiaryDate.value);
    setUserCartNumber(cartNumber.value);
    setUserCw(cw.value);
  };

  const changename = (event: React.ChangeEvent<HTMLInputElement>) => {
    setuserName(event.currentTarget.value);
  };

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsereEmail(event.currentTarget.value);
  };

  const changeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCity(event.currentTarget.value);
  };

  const changeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSurname(event.currentTarget.value);
  };

  const changePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPhone(event.currentTarget.value);
  };

  const changePostalCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPostalCode(event.currentTarget.value);
  };

  const changeExpiaryDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserExpiryDate(event.currentTarget.value);
  };

  const changeCartNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCartNumber(event.currentTarget.value);
  };

  const changeCw = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCw(event.currentTarget.value);
  };

  useEffect(() => {
    if (
      userName != "" &&
      usereEmail != "" &&
      userCity != "" &&
      userSurname != "" &&
      userPhone != "" &&
      userPostalCode != "" &&
      userExpiryDate != "" &&
      userCartNumber != "" &&
      userCw != ""
    ) {
      setFinishrderButtonIsDisable(true);
    } else {
      setFinishrderButtonIsDisable(false);
    }
  }, [
    userName,
    usereEmail,
    userCity,
    userSurname,
    userPhone,
    userPostalCode,
    userExpiryDate,
    userCartNumber,
    userCw,
  ]);

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
                <input
                  type="text"
                  placeholder="NAME"
                  onChange={changename}
                  value={userName}
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  onChange={changeEmail}
                  value={usereEmail}
                />
                <input
                  type="text"
                  placeholder="CITY, STREET"
                  onChange={changeCity}
                  value={userCity}
                />
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
                <input
                  type="text"
                  placeholder="SURNAME"
                  onChange={changeSurname}
                  value={userSurname}
                />
                <input
                  type="text"
                  placeholder="+ 994 (__) ___ __ __"
                  onChange={changePhone}
                  value={userPhone}
                />
                <input
                  type="text"
                  placeholder="POSTAL CODE"
                  onChange={changePostalCode}
                  value={userPostalCode}
                />
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
            <input
              type="text"
              placeholder="CARD NUMBER"
              onChange={changeCartNumber}
              value={userCartNumber}
            />
            <input
              type="text"
              placeholder="EXPIRY DATE"
              onChange={changeExpiaryDate}
              value={userExpiryDate}
            />
            <input
              type="text"
              placeholder="CW"
              onChange={changeCw}
              value={userCw}
            />
            <button
              className={
                (finishrderButtonIsDisable && style.finish_button_brown) ||
                style.finish_button_silver
              }
              onClick={() => setCompleteView(!completeView)}
              disabled={finishrderButtonIsDisable === false}
            >
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

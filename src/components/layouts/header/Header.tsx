import { NavLink, Link, useNavigate } from "react-router-dom";
import "../../../assets/Container.css";
import style from "./Header.module.css";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useDispatch } from "react-redux";
import { totalPriceEmpty } from "../../../store/slices/shoppingCartItemsCountAndPriceCountSlice";
import { opacityView } from "../../../store/slices/searchOpacityViewSlice";

// const setActive = ({ isActive }: { isActive: boolean }) =>
//   isActive ? style.active : "";

type FormFields = {
  value: HTMLInputElement;
};

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? {
        content: "",
        height: "1px",
        display: "block",
        strokeWidth: "1px",
        borderBottom: "1px #B8926A solid",
        paddingBottom: "30px",
        fontWeight: "600",
      }
    : { color: "#2D2D2B" };

const Header = () => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState<boolean>(false);
  const [token, setToken] = useLocalStorage("", "userToken");
  const dispatch = useDispatch();

  const [searchView, setSearchView] = useState<boolean>(true);

  useEffect(() => {
    if (token == "") {
      setUserLogin(false);
    } else {
      setUserLogin(true);
    }
  }, [token]);

  const searchButtonAction = () => {
    setSearchView(!searchView);
    dispatch(opacityView(true));
  };

  const searchCancelButtonAction = () => {
    setSearchView(!searchView);
    dispatch(opacityView(false));
  };

  const [serachValue, setSerachValue] = useState<string>("");

  const handleSumbit: React.FormEventHandler<HTMLFormElement & FormFields> = (
    event
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { value } = form;
    setSerachValue(value.value);
  };

  const changeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSerachValue(event.currentTarget.value);
  };

  return (
    <header className="container">
      <nav>
        {(searchView && (
          <div className={style.headerMain}>
            <div className={style.header_left}>
              <Link to="" className={style.azBtn}>
                Az
              </Link>
              <button className={style.search_btn} onClick={searchButtonAction}>
                <img
                  src="/public/header/search.png"
                  alt=""
                  className={style.img}
                />
              </button>
            </div>
            <div>
              <Link to="/" className={style.home_link}>
                <p className={style.header_title}>HomeDecor</p>
              </Link>
            </div>
            <div className={style.header_right}>
              <Link
                to="/shoppingcart"
                className={style.shop_user_button}
                onClick={() => dispatch(totalPriceEmpty())}
              >
                <img
                  src="/public/header/shop.png"
                  alt=""
                  className={style.img}
                />
              </Link>
              <Link
                to={(userLogin && "/myaccount") || "/login"}
                className={style.shop_user_button}
              >
                <img
                  src="/public/header/user.png"
                  alt=""
                  className={style.img}
                />
              </Link>
            </div>
          </div>
        )) || (
          <div className={style.search_back_view_body}>
            <div>
              <div>
                <img src="/src/assets/homePapeImage/search2Img.png" alt="" />
              </div>
              <form onSubmit={handleSumbit}>
                <input
                  type="text"
                  placeholder="SEARCH OUR STORE"
                  onChange={changeSearchValue}
                  value={serachValue}
                />
              </form>
            </div>
            <button onClick={searchCancelButtonAction}>
              <img src="/src/assets/ph_X.png" alt="" />
            </button>
          </div>
        )}

        <div className={style.header_nav}>
          <ul className={style.header_nav_list}>
            <li>
              <NavLink to="/" className={style.link} style={setActive}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={style.link} style={setActive}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={style.link} style={setActive}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collections"
                className={style.link}
                style={setActive}
              >
                Collections
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={style.link} style={setActive}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

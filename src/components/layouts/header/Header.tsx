import { NavLink, Link } from "react-router-dom";
import "../../../assets/Container.css";
import style from "./Header.module.css";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

// const setActive = ({ isActive }: { isActive: boolean }) =>
//   isActive ? style.active : "";

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
  const [userLogin, setUserLogin] = useState<boolean>(false);

  const [token, setToken] = useLocalStorage("", "userToken");

  useEffect(() => {
    if (token == "") {
      setUserLogin(false);
    } else {
      setUserLogin(true);
    }
  }, [token]);

  return (
    <header className="container">
      <nav>
        <div className={style.headerMain}>
          <div className={style.header_left}>
            <Link to="" className={style.azBtn}>
              Az
            </Link>
            <Link to="/" className={style.search_btn}>
              <img
                src="/public/header/search.png"
                alt=""
                className={style.img}
              />
            </Link>
          </div>
          <div>
            <Link to="/" className={style.home_link}>
              <p className={style.header_title}>HomeDecor</p>
            </Link>
          </div>
          <div className={style.header_right}>
            <Link to="/shoppingcart" className={style.shop_user_button}>
              <img src="/public/header/shop.png" alt="" className={style.img} />
            </Link>
            <Link
              to={(userLogin && "/myaccount") || "/login"}
              className={style.shop_user_button}
            >
              <img src="/public/header/user.png" alt="" className={style.img} />
            </Link>
          </div>
        </div>
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

import { NavLink } from "react-router-dom";
import "../../../assets/Container.css";
import style from "./Header.module.css";

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
      }
    : { color: "black" };

const Header = () => {
  return (
    <header className="container">
      <nav>
        <div className={style.headerMain}>
          <div className={style.header_left}>
            <button className={style.azBtn}>Az</button>
            <button className={style.search_btn}>
              <img
                src="/public/header/search.png"
                alt=""
                className={style.img}
              />
            </button>
          </div>
          <div>
            <p className={style.header_title}>HomeDecor</p>
          </div>
          <div className={style.header_right}>
            <button className={style.shop_user_button}>
              <img src="/public/header/shop.png" alt="" className={style.img} />
            </button>
            <button className={style.shop_user_button}>
              <img src="/public/header/user.png" alt="" className={style.img} />
            </button>
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
                to="/collectios"
                className={style.link}
                style={setActive}
              >
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink to="/sale" className={style.link} style={setActive}>
                Sale
              </NavLink>
            </li>
            <li>
              <NavLink to="/constacts" className={style.link} style={setActive}>
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

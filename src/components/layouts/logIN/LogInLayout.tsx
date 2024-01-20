import style from "./LogInLayout.module.css";
import { Outlet } from "react-router-dom";
import "../../../assets/Container.css";

const LogInLayout = () => {
  return (
    <>
      <div className={style.body}>
        <div className={style.left}>
          <div className={style.back_button_and_p_body}>
            <button>
              <img src="/public/main/left.png" alt="" />
            </button>
            <p>HOME</p>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
        <div className={style.img_body}>
          <img src="/public/main/logIn.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default LogInLayout;

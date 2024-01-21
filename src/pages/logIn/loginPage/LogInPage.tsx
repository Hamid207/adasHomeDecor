import style from "./LogInPage.module.css";
import CustomInput from "../../../components/ui/customInput/CustomInput";
import { Link } from "react-router-dom";
import CustomLink from "../../../components/ui/customLink/CustomLink";

const LogInPage = () => {
  return (
    <div className={style.body}>
      <h3 className={style.title}>LOG IN</h3>
      <form action="">
        <CustomInput type="text" placeholder="E-MAIL ADRESS" />
        <div className={style.password_body}>
          <input type="text" placeholder="PASSWORD" />
          <button>
            <img src="/public/login//Eye.png" alt="" />
          </button>
        </div>
        <Link to="/resetpass" className={style.forgot_password_link}>
          Forgot password?
        </Link>
      </form>
      <CustomLink
        to=""
        text="LOG IN"
        width="438px"
        height="54px"
        backColor="brown"
        hidden
      />
      <div className={style.register_link_body}>
        <p>Don’t have an account?</p>
        <Link to="" className={style.register_link}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default LogInPage;

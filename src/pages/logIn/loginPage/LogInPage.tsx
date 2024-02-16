import style from "./LogInPage.module.css";
import CustomInput from "../../../components/ui/customInput/CustomInput";
import { Link } from "react-router-dom";
import CustomLink from "../../../components/ui/customLink/CustomLink";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/Store";
import { useEffect, useState } from "react";
import inputStyle from "../loginInput.module.css";
import { UserModel } from "../../../services/users.service";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

type LoginFormFields = {
  email: string;
  password: string;
};

type FormFields = {
  email: HTMLInputElement;
  password: HTMLInputElement;
};

const LogInPage = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPass, setuserPass] = useState<string>("");
  const userChek = useSelector((state: RootState) => state.users);
  const [token, setToken] = useLocalStorage("userTokenNull", "userToken");

  const handleSumbit: React.FormEventHandler<HTMLFormElement & FormFields> = (
    event
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { email, password } = form;
    setUserEmail(email.value);
    setuserPass(password.value);
  };

  useEffect(() => {
    const user = userChek.find((item: UserModel) => item.email === userEmail);
    if (user) {
      if (
        Object.values(user)[2] == userEmail &&
        Object.values(user)[3] == userPass
      ) {
        setToken(Object.values(user)[4]);
        console.log("USER LOGIN OLDU");
      } else {
        console.log("USER LOGIN OLMADI");
      }
    }
  }, [userEmail, userPass]);

  return (
    <div className={style.body}>
      <h3 className={style.title}>LOG IN</h3>
      <form onSubmit={handleSumbit}>
        <input
          name="email"
          type="email"
          placeholder="E-MAIL ADRESS"
          className={inputStyle.loginInput}
        />
        <div className={style.password_body}>
          <input name="password" type="password" placeholder="PASSWORD" />
          <button>
            <img src="/public/login//Eye.png" alt="" />
          </button>
        </div>
        <Link to="/resetpass" className={style.forgot_password_link}>
          Forgot password?
        </Link>
      </form>
      <CustomLink
        to="/"
        text="LOG IN"
        width="438px"
        height="54px"
        backColor="brown"
        hidden
      />
      <div className={style.register_link_body}>
        <p>Don’t have an account?</p>
        <Link to="/register" className={style.register_link}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default LogInPage;

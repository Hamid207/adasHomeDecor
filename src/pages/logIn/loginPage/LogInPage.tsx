import style from "./LogInPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/Store";
import { useEffect, useState } from "react";
import inputStyle from "../loginInput.module.css";
import { UserModel } from "../../../services/users.service";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import buttonStyle from "../loginButton.module.css";

type LoginFormFields = {
  email: string;
  password: string;
};

type FormFields = {
  email: HTMLInputElement;
  password: HTMLInputElement;
};

const LogInPage = () => {
  const userChek = useSelector((state: RootState) => state.users);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPass, setuserPass] = useState<string>("");
  const [token, setToken] = useLocalStorage("userTokenNull", "userToken");
  const [chekUser, setChekUser] = useState<boolean>(false);

  const navigate = useNavigate();

  const buttonAction = () => {
    console.log(chekUser);

    if (chekUser == true && user) {
      setToken(Object.values(user)[3]);
      setTimeout(() => {
        navigate("/myaccount");
      }, 1000);
      console.log("USER LOGIN OLDU");
    }
  };

  const user = userChek.find((item: UserModel) => item.email === userEmail);

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
    setChekUser(false);

    if (user) {
      if (
        Object.values(user)[1] == userEmail &&
        Object.values(user)[2] == userPass
      ) {
        console.log(
          Object.values(user)[1],
          userEmail,
          Object.values(user)[2],
          userPass
        );
        setChekUser(true);
      } else {
        setChekUser(false);

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
        <button
          onClick={buttonAction}
          style={{ width: "438px", height: "54px" }}
          className={buttonStyle.button}
        >
          LOG IN
        </button>
      </form>

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

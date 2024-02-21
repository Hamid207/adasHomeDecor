import { Link, useNavigate } from "react-router-dom";
import style from "./RegisterPage.module.css";
import inputStyle from "../loginInput.module.css";
import buttonStyle from "../loginButton.module.css";
import { useEffect, useState } from "react";
import { UserModel, UsersService } from "../../../services/users.service";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/Store";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

type FormFields = {
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  repeatPassword: HTMLInputElement;
};

const RegisterPage = () => {
  const users = useSelector((state: RootState) => state.users);
  const [token, setToken] = useLocalStorage("userTokenNull", "userToken");

  const [userEmail, setUserEmail] = useState<string>("");
  const [userPass, setuserPass] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [userHave, setUserHave] = useState<boolean>(false);

  const chaEngmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.currentTarget.value);
  };

  const changeUserPass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setuserPass(event.currentTarget.value);
  };

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const repeatPass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(event.currentTarget.value);
  };

  const navigate = useNavigate();

  const action = () => {
    if (userHave == true) {
      const token = Math.floor(Math.random() * 1000000000000000).toString();
      const fetchData = async () => {
        await UsersService.getAddUser({
          email: userEmail,
          password: userPass,
          fullname: name,
          userToken: token,
        });
      };

      fetchData();
      console.log("NEW USERRRRRRRRR");
      setToken(token);

      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);
    }
  };

  const handleSumbit: React.FormEventHandler<HTMLFormElement & FormFields> = (
    event
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { email, password, name, repeatPassword } = form;
    setUserEmail(email.value);
    setuserPass(password.value);
    setName(name.value);
    setRepeatPassword(repeatPassword.value);
  };

  useEffect(() => {
    setUserHave(false);
    if (name != "" && userPass === repeatPassword) {
      const user = users.find((user: UserModel) => user.email === userEmail);
      if (!user) {
        setUserHave(true);
        console.log(userPass, repeatPassword);
      } else {
        setUserHave(false);
        console.log("EMAIL ZANITDI");
      }
    }
  }, [userEmail, userPass, name, repeatPassword]);

  return (
    <div className={style.body}>
      <h3 className={style.title}>REGISTER</h3>
      <form onSubmit={handleSumbit}>
        <input
          name="name"
          type="text"
          placeholder="NAME, SURNAME"
          className={inputStyle.loginInput}
          value={name}
          onChange={changeName}
        />
        <input
          name="email"
          type="email"
          placeholder="E-MAIL ADRESS"
          className={inputStyle.loginInput}
          value={userEmail}
          onChange={chaEngmail}
        />
        <input
          name="password"
          type="password"
          placeholder="PASSWORD"
          className={inputStyle.loginInput}
          value={userPass}
          onChange={changeUserPass}
        />
        <input
          name="password"
          type="password"
          placeholder="REPEAT PASSWORD"
          className={inputStyle.loginInput}
          value={repeatPassword}
          onChange={repeatPass}
        />
        <button
          onClick={action}
          style={{ width: "438px", height: "54px" }}
          className={buttonStyle.button}
        >
          LOG IN
        </button>
      </form>

      <div className={style.register_link_body}>
        <p>Already have an account?</p>
        <Link to="/login" className={style.register_link}>
          Log in
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;

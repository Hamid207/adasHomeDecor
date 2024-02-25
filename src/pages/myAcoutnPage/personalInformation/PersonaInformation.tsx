import { useEffect, useState } from "react";
import style from "./PersonalInformation.module.css";
import { useSelector } from "react-redux";
import { RootState, store } from "../../../store/Store";
import { UserModel, UsersService } from "../../../services/users.service";
import { fetchUsers } from "../../../store/slices/usersSlice";

type FormFields = {
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
};

const PersonaInformation = () => {
  const [userName, setuserName] = useState<string>("");
  const [userEmail, setuserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const changename = (event: React.ChangeEvent<HTMLInputElement>) => {
    setuserName(event.currentTarget.value);
  };
  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setuserEmail(event.currentTarget.value);
  };

  const changePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.currentTarget.value);
  };

  const handleSumbit: React.FormEventHandler<HTMLFormElement & FormFields> = (
    event
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, email, password } = form;
    setuserName(name.value);
    setuserEmail(email.value);
    setUserPassword(password.value);
  };

  const userInfo = useSelector((state: RootState) => state.users);
  const userToken = JSON.parse(localStorage.getItem("userToken") || "{}");

  const user = userInfo.find(
    (userr: UserModel) => userr.userToken == userToken
  );

  const buttonAction = () => {
    store.dispatch(fetchUsers());

    if (user) {
      const fetchData = async () => {
        await UsersService.getUserPut({
          id: Object.values(user)[4] as string,
          fullname: userName,
          email: userEmail,
          password: userPassword,
          userToken: userToken,
        });
      };
      fetchData();
      store.dispatch(fetchUsers());
    }
  };

  useEffect(() => {
    if (user) {
      console.log(user);

      console.log("USEEEEFFECT");
      store.dispatch(fetchUsers());

      setuserName(Object.values(user)[0] as string);
      setuserEmail(Object.values(user)[1] as string);
      setUserPassword(Object.values(user)[2] as string);
    }
  }, []);

  return (
    <div className={style.body}>
      <form onSubmit={handleSumbit} className={style.form}>
        <input
          type="text"
          placeholder="NAME"
          value={userName}
          onChange={changename}
          className={style.input}
        />
        <input
          type="email"
          placeholder="EMAIL"
          value={userEmail}
          onChange={changeEmail}
          className={style.input}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          value={userPassword}
          onChange={changePass}
          className={style.input}
        />
        {/* <CustomInput type="text" placeholder="NAME" value="" />
        <CustomInput type="text" placeholder="SURNAME" value="" />
        <CustomInput type="text" placeholder="EMAIL" value="" />
        <CustomInput type="text" placeholder="PASSSSS" value="" /> */}
        <button className={style.button} onClick={buttonAction}>
          SAVE CHANGES
        </button>
        {/* <CustomLink
          to=""
          text="SAVE CHANGES"
          width="446px"
          height="54px"
          backColor="brown"
          hidden
        /> */}
      </form>
    </div>
  );
};

export default PersonaInformation;

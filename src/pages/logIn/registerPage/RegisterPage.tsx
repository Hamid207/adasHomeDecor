import { Link } from "react-router-dom";
import style from "./RegisterPage.module.css";
import CustomInput from "../../../components/ui/customInput/CustomInput";
import CustomLink from "../../../components/ui/customLink/CustomLink";

const RegisterPage = () => {
  return (
    <div className={style.body}>
      <h3 className={style.title}>REGISTER</h3>
      <form action="">
        <CustomInput type="text" placeholder="NAME, SURNAME" />
        <CustomInput type="text" placeholder="E-MAIL ADRESS" />
        <CustomInput type="text" placeholder="PASSWORD" />
        <CustomInput type="text" placeholder="REPEAT PASSWORD" />
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
        <p>Already have an account?</p>
        <Link to="" className={style.register_link}>
          Log in
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;

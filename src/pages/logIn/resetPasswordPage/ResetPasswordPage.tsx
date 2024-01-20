import style from "./ResetPasswordPage.module.css";
import { Link } from "react-router-dom";
import CustomLink from "../../../components/ui/customLink/CustomLink";
import CustomInput from "../../../components/ui/customInput/CustomInput";

const ResetPasswordPage = () => {
  return (
    <div className={style.body}>
      <h3 className={style.title}>RESET PASSWORD</h3>
      <form action="">
        <CustomInput type="text" placeholder="E-MAIL ADRESS" />
      </form>
      <CustomLink
        to=""
        text="SEND"
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

export default ResetPasswordPage;

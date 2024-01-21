import { Link } from "react-router-dom";
import CustomInput from "../../../components/ui/customInput/CustomInput";
import CustomLink from "../../../components/ui/customLink/CustomLink";
import style from "./VerificationPage.module.css";

const VerificationPage = () => {
  return (
    <div className={style.body}>
      <h3 className={style.title}>VERIFICATION</h3>
      <form action="">
        <CustomInput type="text" placeholder="ENTER VERIFICATION NUMBER" />
      </form>
      <div className={style.register_link_body}>
        <p>Didn’t receive a code?</p>
        <Link to="" className={style.register_link}>
          Resend
        </Link>
      </div>
      <CustomLink
        to=""
        text="VERIFY"
        width="438px"
        height="54px"
        backColor="brown"
        hidden
      />
    </div>
  );
};

export default VerificationPage;

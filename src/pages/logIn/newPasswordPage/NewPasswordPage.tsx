import CustomInput from "../../../components/ui/customInput/CustomInput";
import CustomLink from "../../../components/ui/customLink/CustomLink";
import style from "./NewPasswordPage.module.css";

const NewPasswordPage = () => {
  return (
    <div className={style.body}>
      <h3 className={style.title}>NEW PASSWORD</h3>
      <form action="">
        <CustomInput type="text" placeholder="ENTER NEW PASSWORD" />
        <CustomInput type="text" placeholder="CONFIRM PASSWORD" />
      </form>
      <CustomLink
        to=""
        text="SUBMIT"
        width="438px"
        height="54px"
        backColor="brown"
        hidden
      />
    </div>
  );
};

export default NewPasswordPage;

import CustomInput from "../../../components/ui/customInput/CustomInput";
import CustomLink from "../../../components/ui/customLink/CustomLink";
import style from "./PersonalInformation.module.css";

const PersonaInformation = () => {
  return (
    <div className={style.body}>
      <form action="" className={style.form}>
        <CustomInput type="text" placeholder="NAME" />
        <CustomInput type="text" placeholder="SURNAME" />
        <CustomInput type="text" placeholder="EMAIL" />
        <CustomInput type="text" placeholder="PASSSSS" />
        <CustomLink
          to=""
          text="SAVE CHANGES"
          width="446px"
          height="54px"
          backColor="brown"
          hidden
        />
      </form>
    </div>
  );
};

export default PersonaInformation;

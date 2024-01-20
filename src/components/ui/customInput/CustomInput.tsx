import style from "./CustomInput.module.css";

interface InputProps {
  type: string;
  placeholder: string;
}

const CustomInput = (props: InputProps) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={style.body}
      />
    </>
  );
};

export default CustomInput;

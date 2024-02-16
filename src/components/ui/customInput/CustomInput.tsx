import style from "./CustomInput.module.css";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
}

const CustomInput = (props: InputProps) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={style.body}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
};

export default CustomInput;

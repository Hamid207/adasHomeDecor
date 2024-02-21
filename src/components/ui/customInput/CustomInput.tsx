import { useState } from "react";
import style from "./CustomInput.module.css";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  // onChange: (e: React.ChangeEvent) => void;
}

const CustomInput = (props: InputProps) => {
  const [value, setValue] = useState<string>("");
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={style.body}
        value={value}
        onChange={changeValue}
      />
    </>
  );
};

export default CustomInput;

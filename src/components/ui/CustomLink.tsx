import { Link } from "react-router-dom";
import style from "./CustomLink.module.css";

interface MyLink {
  to: string;
  text: string;
  width: string;
  height: string;
  backColor: string;
  hidden: boolean;
}

const CustomLink = (props: MyLink) => {
  let sty = style.custom_link_body;
  let textColor = "white";

  switch (true) {
    case props.backColor == "none":
      sty = style.learn_more;
      textColor = "#B8926A";
      break;
    case props.backColor == "brown":
      sty = style.custom_link_body;
      textColor = "white";
      break;
  }

  return (
    <>
      <div
        className={sty}
        style={{
          width: props.width,
          height: props.height,
          visibility: props.hidden ? "visible" : "hidden",
        }}
      >
        <Link
          to={props.to}
          className={style.custom_link}
          style={{ color: textColor }}
        >
          {props.text}
        </Link>
      </div>
    </>
  );
};

export default CustomLink;

import "../../../assets/Container.css";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="container">
      <div className={style.body}>
        <div className={style.title}>
          <p>HomeDecor</p>
          <p>©2024 All Right Reserved. Developed by Webcoder Agency</p>
        </div>
        <div className={style.midle_text}>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui</p>
        </div>
        <p className={style.tell}>+994 50 555 55 55</p>
        <p className={style.email}>youremailhere@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;

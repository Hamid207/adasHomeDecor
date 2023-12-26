import style from "../mainImageAndText/MainImageAndText.module.css";
import CustomLink from "../ui/CustomLink";

const MainImageAndText = () => {
  return (
    <div className={style.body}>
      <div className={style.big_img_and__blur_body}>
        <div className={style.blur}></div>
        <div className={style.img_body}>
          <img src="/public/main/bigImg.png" alt="" />
        </div>
      </div>
      <div className={style.main_text_body}>
        <h1 className={style.main_text}>THE FURNITURE THAT DEFINES YOU</h1>
        <div className={style.text_second_text_body}>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum
          </p>
        </div>
        <div className={style.show_now_link_body}>
          <CustomLink
            to="/"
            text="SHOP NOW"
            width="330px"
            height="54px"
            backColor="borown"
          ></CustomLink>
        </div>
      </div>
    </div>
  );
};

export default MainImageAndText;

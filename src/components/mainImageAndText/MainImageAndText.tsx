import { useEffect, useState } from "react";
import style from "../mainImageAndText/MainImageAndText.module.css";
import CustomLink from "../ui/customLink/CustomLink";
import { HeadingsService } from "../../services/heading.service";

interface Heading {
  title: string;
  image: string;
  desc: string;
}

const MainImageAndText = () => {
  const [heading, setHeading] = useState<Heading>({
    title: "",
    image: "",
    desc: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await HeadingsService.getHeading();
      setHeading(data);
    };
    fetchData();
  }, []);

  return (
    <section>
      <div className={style.body}>
        <div className={style.big_img_and__blur_body}>
          <div className={style.blur}></div>
          <div className={style.img_body}>
            <img src="/public/main/bigImg.png" alt="" />
          </div>
        </div>
        <div className={style.main_text_body}>
          <h1 className={style.main_text}>{heading.title}</h1>
          <div className={style.text_second_text_body}>
            <p>{heading.desc}</p>
          </div>
          <div className={style.show_now_link_body}>
            <CustomLink
              to="/"
              text="SHOP NOW"
              width="330px"
              height="54px"
              backColor="brown"
              hidden={true}
            ></CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainImageAndText;

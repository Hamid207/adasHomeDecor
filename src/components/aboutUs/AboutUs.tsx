import style from "./AboutUs.module.css";
import CustomLink from "../ui/CustomLink";

interface Page {
  pageName: string;
}

const AboutUs = (props: Page) => {
  let isHiden: boolean = true;
  switch (true) {
    case props.pageName == "about":
      isHiden = false;
      break;
    case props.pageName == "home":
      isHiden = true;
      break;
  }

  return (
    <>
      <section>
        <div className={style.body}>
          <div
            className={style.navigation_title_body}
            style={{ display: isHiden ? "none" : "block" }}
          >
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
          <p className={style.title}>ABOUT US</p>
          <div className={style.img_text_and_btn_body}>
            <div className={style.img_body}>
              <img
                src="/public/main/aboutUs.png"
                alt=""
                className={style.img}
              />
            </div>
            <div className={style.text_btn_body}>
              <p className={style.txt1}>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus.
              </p>
              <p className={style.txt2}>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.
              </p>
              <p className={style.txt3}>
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
              <CustomLink
                to="/"
                text="LEARN MORE"
                width="330px"
                height="54px"
                backColor="none"
                hidden={isHiden}
              ></CustomLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

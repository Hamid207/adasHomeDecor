import style from "./Contact.module.css";
import CustomLink from "../ui/customLink/CustomLink";

interface Page {
  pageName: string;
}

const Contact = (props: Page) => {
  let isHiden: boolean = true;
  switch (true) {
    case props.pageName == "contact":
      isHiden = false;
      break;
  }

  return (
    <section>
      <div
        className={style.navigation_title_body}
        style={{ display: isHiden ? "none" : "block" }}
      >
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
      <p className={style.title}>CONTACT</p>
      <div className={style.body}>
        <div>
          <form action="" className={style.form}>
            <input type="text" placeholder="NAME, SURNAME" />
            <input type="text" placeholder="E-MAIL ADRESS" />
            <input type="text" placeholder="THEME" />
            <textarea
              className={style.message_input}
              placeholder="YOUR MESSAGE"
            />
            <button>
              <CustomLink
                to=""
                text="SUBMIT"
                width="563px"
                height="54px"
                backColor="brown"
                hidden={true}
              />
            </button>
          </form>
        </div>
        <div className={style.img_body}>
          <img src="/public/main/contactImg.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

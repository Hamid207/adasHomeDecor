import style from "./Contact.module.css";
import CustomLink from "../ui/CustomLink";

const Contact = () => {
  return (
    <section>
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

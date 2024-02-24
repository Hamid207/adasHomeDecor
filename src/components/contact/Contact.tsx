import { useEffect, useState } from "react";
import style from "./Contact.module.css";
import CustomLink from "../ui/customLink/CustomLink";

interface Page {
  pageName: string;
  marginTop: string;
}

const Contact = (props: Page) => {
  const [thanksView, setThanksView] = useState<boolean>(false);

  let isHiden: boolean = true;
  switch (true) {
    case props.pageName == "contact":
      isHiden = false;
      break;
  }
  const handleSumbit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // const form = event.currentTarget;
  };

  const submuttButtonAction = () => {
    if (props.pageName == "contact") {
      setThanksView(!thanksView);
    }
  };

  return (
    <>
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
        <p className={style.title} style={{ marginTop: props.marginTop }}>
          CONTACT
        </p>
        <div className={style.body}>
          <div>
            <form onSubmit={handleSumbit} className={style.form}>
              <input type="text" placeholder="NAME, SURNAME" />
              <input type="text" placeholder="E-MAIL ADRESS" />
              <input type="text" placeholder="THEME" />
              <textarea
                className={style.message_input}
                placeholder="YOUR MESSAGE"
              />
              <button
                className={style.submit_button}
                onClick={submuttButtonAction}
              >
                SUBMIT
              </button>
            </form>
          </div>
          <div className={style.img_body}>
            <img src="/public/main/contactImg.png" alt="" />
          </div>
        </div>
      </section>
      {thanksView && (
        <div className={style.thanks_back_body}>
          <div className={style.thanks_body}>
            <div className={style.back_btn_body}>
              <button onClick={() => setThanksView(!thanksView)}>
                <img src="/src/assets/ph_X.png" alt="" />
              </button>
            </div>
            <div className={style.main_body}>
              <h2>THANK YOU!</h2>
              <div>
                <p>
                  Your message has been received and we will contact you as soon
                  as possible.
                </p>
              </div>
              <CustomLink
                to="/"
                text="HOME PAGE"
                width="214px"
                height="44px"
                backColor="brown"
                hidden={true}
              ></CustomLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;

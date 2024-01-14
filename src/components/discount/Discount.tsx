import style from "./Discount.module.css";
import CustomLink from "../ui/customLink/CustomLink";

const Discount = () => {
  return (
    <section>
      <div className={style.body}>
        <p>20% DISCOUNT</p>
        <div className={style.text_body}>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo
          </p>
        </div>

        <CustomLink
          to=""
          text="SHOP NOW"
          width="330px"
          height="54px"
          backColor="brown"
        ></CustomLink>
      </div>
    </section>
  );
};

export default Discount;

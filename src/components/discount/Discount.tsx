import style from "./Discount.module.css";
import CustomLink from "../ui/customLink/CustomLink";
import { useEffect, useState } from "react";
import {
  DiscountModel,
  DiscountService,
} from "../../services/discount.service";

const Discount = () => {
  const [discount, setDiscount] = useState<DiscountModel>({
    sale: "",
    image: "",
    desc: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await DiscountService.getDiscount();
      setDiscount(data);
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className={style.body}>
        <p>{discount.sale} DISCOUNT</p>
        <div className={style.text_body}>
          <p>{discount.desc}</p>
        </div>

        <CustomLink
          to="/products"
          text="SHOP NOW"
          width="330px"
          height="54px"
          backColor="brown"
          hidden={true}
        ></CustomLink>
      </div>
    </section>
  );
};

export default Discount;

import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "./CollectionSilder.css";
import { SwiperNavButtons } from "./SwiperNavButton";
import { Link } from "react-router-dom";
import style from "./CollectionSilder.module.css";

// interface MySlider {
//   name: string;
//   isHidden: boolean;
//   width: string;
//   height: string;
// }

// export enum Slider {
//   collection,
//   products,
//   categories,
// }

interface MainChildren {
  children: React.ReactNode;
  name: string;
  isHidden: boolean;
  seeAllIshidden: boolean;
  marginTop: string;
  backColor: string;
  height: string;
}

const CollectionSlider = ({
  children,
  name,
  isHidden,
  seeAllIshidden,
  marginTop,
  backColor,
  height,
}: MainChildren) => {
  return (
    <section>
      <div
        className="App"
        style={{
          marginTop: marginTop,
          height: height,
          backgroundColor: backColor,
        }}
      >
        <h2 className={style.title}>{name}</h2>
        <div
          style={{
            textAlign: "right",
            display: seeAllIshidden ? "none" : "block",
          }}
          className={style.title_body}
        >
          <Link to="/collections" className={style.see_all}>
            SEE ALL
          </Link>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView="auto"
        >
          <div>{children}</div>
          <SwiperNavButtons isHidden={isHidden} />
        </Swiper>
      </div>
    </section>
  );
};

export default CollectionSlider;

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
}

const CollectionSlider = ({
  children,
  name,
  isHidden,
  seeAllIshidden,
}: MainChildren) => {
  return (
    <section>
      <div className="App">
        <h2 className={style.title}>{name}</h2>
        <div
          style={{
            textAlign: "right",
            display: seeAllIshidden ? "none" : "block",
          }}
          className={style.title_body}
        >
          <Link to="/" className={style.see_all}>
            SEE ALL
          </Link>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
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

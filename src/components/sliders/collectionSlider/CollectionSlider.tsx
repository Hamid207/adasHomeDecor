import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "./CollectionSilder.css";
import { SwiperNavButtons } from "./SwiperNavButton";
import { Link } from "react-router-dom";
import style from "./CollectionSilder.module.css";

interface Test {
  name: string;
}

const CollectionSlider = (props: Test) => {
  return (
    <section>
      <div className="App">
        <div style={{ textAlign: "left" }} className={style.title_body}>
          <h2 className={style.title}>{props.name}</h2>
          <Link to="/" className={style.see_all}>
            SEE ALL
          </Link>
        </div>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView="auto"
        >
          <SwiperSlide className="res-slide">
            <div className="blur">
              <p>asdasdasd</p>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide className="res-slide">
          <ProductsGrid />
        </SwiperSlide> */}
          <SwiperNavButtons />
        </Swiper>
      </div>
    </section>
  );
};

export default CollectionSlider;

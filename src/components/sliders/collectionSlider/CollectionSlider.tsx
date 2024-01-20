import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "./CollectionSilder.css";
import { SwiperNavButtons } from "./SwiperNavButton";
import { Link } from "react-router-dom";
import style from "./CollectionSilder.module.css";
import CollectionsGrid from "../../collections/collectionsGrid/CollectionsGrid";

interface Test {
  name: string;
  isHidden: boolean;
  width: string;
  height: string;
}

const CollectionSlider = (props: Test) => {
  return (
    <section>
      <div className="App">
        <div
          style={{
            textAlign: "left",
            display: props.isHidden ? "none" : "block",
          }}
          className={style.title_body}
        >
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
          <SwiperSlide>
            <CollectionsGrid />
          </SwiperSlide>
          {/* <SwiperSlide
            className="res-slide"
            style={{ width: props.width, height: props.height }}
          >
            <div
              style={{ display: props.isHidden ? "none" : "block" }}
              className="blur"
            >
              <p>asdasdasd</p>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide className="res-slide">
          <ProductsGrid />
        </SwiperSlide> */}
          <SwiperNavButtons isHidden={props.isHidden} />
        </Swiper>
      </div>
    </section>
  );
};

export default CollectionSlider;

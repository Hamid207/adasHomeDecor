import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "./CollectionSilder.css";
import { SwiperNavButtons } from "./SwiperNavButton";
import ProductsGrid from "../../products/productsGrid/ProductsGrid";

interface Test {
  name: string;
}

const CollectionSlider = (props: Test) => {
  return (
    <div className="App">
      <div style={{ textAlign: "left" }}>
        <h2>{props.name}</h2>
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
  );
};

export default CollectionSlider;

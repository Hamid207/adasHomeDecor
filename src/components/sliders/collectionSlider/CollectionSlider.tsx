import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "./CollectionSilder.css";
import { SwiperNavButtons } from "./SwiperNavButton";
import { Link } from "react-router-dom";
import style from "./CollectionSilder.module.css";
import CollectionsGrid from "../../collections/collectionsGrid/CollectionsGrid";
import ProductsGrid from "../../products/productsGrid/ProductsGrid";

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
  width: string;
  height: string;
  seeAllIshidden: boolean;
}

const CollectionSlider = ({
  children,
  name,
  isHidden,
  seeAllIshidden,
  width,
  height,
}: MainChildren) => {
  return (
    <section>
      <div className="App">
        <div
          style={{
            textAlign: "right",
            display: seeAllIshidden ? "none" : "block",
          }}
          className={style.title_body}
        >
          <h2 className={style.title}>{name}</h2>
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

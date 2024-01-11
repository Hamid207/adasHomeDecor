import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>
        <img src="/public/main/left.png" alt="" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img src="/public/main/right.png" alt="" />
      </button>
    </div>
  );
};

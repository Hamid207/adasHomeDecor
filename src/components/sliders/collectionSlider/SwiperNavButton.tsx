import { useSwiper } from "swiper/react";
import style from "./SwiperNavButton.module.css";

interface NavButton {
  isHidden: boolean;
}

export const SwiperNavButtons = (props: NavButton) => {
  const swiper = useSwiper();

  return (
    <div
      style={{ display: props.isHidden ? "none" : "block" }}
      className={style.swiper_nav_btns}
    >
      <button onClick={() => swiper.slidePrev()}>
        <img src="/public/main/left.png" alt="" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img src="/public/main/right.png" alt="" />
      </button>
    </div>
  );
};

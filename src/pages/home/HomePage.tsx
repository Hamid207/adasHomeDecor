import AboutUs from "../../components/aboutUs/AboutUs";
import MainImageAndText from "../../components/mainImageAndText/MainImageAndText";
import Discount from "../../components/section4/Discount";

const HomePage = () => {
  return (
    <>
      <section>
        <MainImageAndText />
      </section>
      <section>{/*swipe*/}</section>
      <section>
        <AboutUs />
      </section>
      <section>
        <Discount />
      </section>
    </>
  );
};

export default HomePage;

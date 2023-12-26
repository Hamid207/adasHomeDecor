import AboutUs from "../../components/aboutUs/AboutUs";
import MainImageAndText from "../../components/mainImageAndText/MainImageAndText";

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
    </>
  );
};

export default HomePage;

import { useSelector } from "react-redux";
import AboutUs from "../../components/aboutUs/AboutUs";
import AboutUsInfo from "../../components/aboutUs/aboutUsInfo/AboutUsInfo";
import { RootState } from "../../store/Store";
import SerachOpacityView from "../../components/serachOpacityView/serachOpacityView";

const AboutPage = () => {
  const searchViewInfo = useSelector(
    (state: RootState) => state.searchOpacityView.boolean
  );

  return (
    <>
      <div>
        <AboutUs pageName="about" />
        <AboutUsInfo />
      </div>
      {searchViewInfo && <SerachOpacityView viewHeight="130%" />}
    </>
  );
};

export default AboutPage;

import { useSelector } from "react-redux";
import Collections from "../../components/collections/Collections";
import { RootState } from "../../store/Store";
import SerachOpacityView from "../../components/serachOpacityView/serachOpacityView";

const CollectionsPage = () => {
  const searchViewInfo = useSelector(
    (state: RootState) => state.searchOpacityView.boolean
  );
  return (
    <>
      <Collections />
      {searchViewInfo && <SerachOpacityView viewHeight="165%" />}
    </>
  );
};

export default CollectionsPage;

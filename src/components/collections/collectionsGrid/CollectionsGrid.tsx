import { Link } from "react-router-dom";
import style from "./CollectionsGrid.module.css";

const CollectionsGrid = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/public/main/collections/col1.png")`,
      }}
      className={style.body}
    >
      <Link to="/collections" className={style.link}>
        <div className={style.blur}>
          <p>BEDROOM</p>
        </div>
        {/* <div className={style.view_back}>
         
        </div> */}
      </Link>
    </div>
  );
};

export default CollectionsGrid;

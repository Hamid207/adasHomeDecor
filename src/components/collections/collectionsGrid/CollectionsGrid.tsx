import { Link } from "react-router-dom";
import style from "./CollectionsGrid.module.css";

interface ColletionCardSize {
  name: string;
  isHidden: boolean;
  width: string;
  height: string;
  img: string;
}

const CollectionsGrid = (props: ColletionCardSize) => {
  return (
    <div
      style={{
        // backgroundImage: `url("/public/main/collections/col1.png")`,
        backgroundImage: `url(${props.img})`,

        width: props.width,
        height: props.height,
      }}
      className={style.body}
    >
      <Link to="/collections" className={style.link}>
        <div className={style.blur}>
          <p>{props.name}</p>
        </div>
        {/* <div className={style.view_back}>
         
        </div> */}
      </Link>
    </div>
  );
};

export default CollectionsGrid;

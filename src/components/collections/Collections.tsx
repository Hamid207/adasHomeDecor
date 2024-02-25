import { useSelector } from "react-redux";
import style from "./Collections.module.css";
import CollectionsGrid from "./collectionsGrid/CollectionsGrid";
import { RootState } from "../../store/Store";
import { Collection } from "../../services/collections.service";

const Collections = () => {
  const collections = useSelector((state: RootState) => state.collections);

  return (
    <section>
      <div className={style.body}>
        <div className={style.navigation_title_body}>
          <ul>
            <li>Home</li>
            <li>Collections</li>
          </ul>
        </div>
        <p>COLLECTIONS</p>
        <div className={style.text_body}>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime.
          </p>
        </div>
        <div className={style.grid_body}>
          {collections.map((collections: Collection) => {
            return (
              <CollectionsGrid
                key={collections.id}
                name={collections.colTitle}
                width="447px"
                height="267px"
                isHidden
                img={collections.image}
                id={collections.id.toString()}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collections;

import style from "./Collections.module.css";
import CollectionsGrid from "./collectionsGrid/CollectionsGrid";

const Collections = () => {
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
          <CollectionsGrid />
          <CollectionsGrid />
          <CollectionsGrid />
          <CollectionsGrid />
          <CollectionsGrid />
          <CollectionsGrid />
          <CollectionsGrid />
          <CollectionsGrid />
          <CollectionsGrid />
        </div>
      </div>
    </section>
  );
};

export default Collections;

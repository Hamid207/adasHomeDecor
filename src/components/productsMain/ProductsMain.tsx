import ProductsGrid from "../products/productsGrid/ProductsGrid";
import CustomLink from "../ui/customLink/CustomLink";
import ProductsList from "../ui/productsList/ProductsList";
import style from "./ProductsMain.module.css";

const ProductsMain = () => {
  return (
    <section>
      <div className={style.body}>
        <div className={style.navigation_title_body}>
          <ul>
            <li>Home</li>
            <li>Products</li>
          </ul>
        </div>
        <p>PRODUCTS</p>
        <div className={style.text_body_and_sortBtn_body}>
          <div className={style.text_body}>
            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime.
            </p>
          </div>
          <CustomLink
            to="/products"
            text="SORT BY"
            width="330px"
            height="54px"
            backColor="none"
            hidden={true}
          ></CustomLink>
        </div>
        <div className={style.grid_container}>
          <div className={style.sidebar}>
            <ProductsList
              name="CATEGORIES"
              lists={[
                "ALL",
                "SOFAS",
                "BEDS AND HEADBOARDS",
                "RUGS",
                "CUSHIONS",
                "SOFAS2",
                "HEADBOARDS",
              ]}
            />
            <ProductsList
              name="COLLECTIONS"
              lists={[
                "ALL",
                "BEDROOM",
                "LIVING ROOM",
                "KITCHEN",
                "LIBRARY",
                "OFFICE",
                "LAUNDRY ROOM",
                "GUEST ROOM",
                "FAMILY ROOM",
                "BATHROOM",
              ]}
            />
          </div>
          <div className={style.productsBody}>
            <ProductsGrid />
            <ProductsGrid />
            <ProductsGrid />
            <ProductsGrid />
            <ProductsGrid />
            <ProductsGrid />
            <ProductsGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsMain;

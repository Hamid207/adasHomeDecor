import { useSelector } from "react-redux";
import ProductsGrid from "../products/productsGrid/ProductsGrid";
import CustomLink from "../ui/customLink/CustomLink";
import ProductsList from "../ui/productsList/ProductsList";
import style from "./ProductsMain.module.css";
import { RootState } from "../../store/Store";
import { Product } from "../../services/products.service";
import { useParams } from "react-router-dom";

const ProductsMain = () => {
  const { id } = useParams() as { id: string };

  const products = useSelector((state: RootState) => state.productts);
  window.scrollTo(0, 0);

  const cateforiesArray = [
    "ALL",
    "SOFAS",
    "BEDS AND HEADBOARDS",
    "RUGS",
    "CUSHIONS",
    "HEADBOARDS",
  ];
  const collections = [
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
  ];

  function convertToTitleCase(str: string) {
    if (!str) {
      return "";
    }
    return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
  }

  return (
    <section>
      <div className={style.body}>
        <div className={style.navigation_title_body}>
          <ul>
            <li>Home</li>
            <li>
              {(id && convertToTitleCase(collections[Number(id)])) ||
                "Products"}
            </li>
          </ul>
        </div>
        <p>{(id && collections[Number(id)]) || "Products"}</p>
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
            <ProductsList name="CATEGORIES" lists={cateforiesArray} id={id} />
            <ProductsList name="COLLECTIONS" lists={collections} id={id} />
          </div>
          <div className={style.productsBody}>
            {(id &&
              products
                .filter(
                  (prodacts: Product) => prodacts.collectionId === Number(id)
                )
                .map((product: Product) => {
                  return (
                    <ProductsGrid
                      key={product.id}
                      name={product.title}
                      width="330px"
                      height="267px"
                      img={product.image}
                      price={product.price}
                      desc={product.desc}
                      id={product.id}
                    />
                  );
                })) ||
              products.map((products: Product) => {
                return (
                  <ProductsGrid
                    key={products.id}
                    name={products.title}
                    width="330px"
                    height="267px"
                    img={products.image}
                    price={products.price}
                    desc={products.desc}
                    id={products.id}
                  />
                );
              })}
            {/* {products.map((products: Product) => {
              return (
                <ProductsGrid
                  key={products.id}
                  name={products.title}
                  width="330px"
                  height="267px"
                  img={products.image}
                  price={products.price}
                  desc={products.desc}
                  id={products.id}
                />
              );
            })} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsMain;

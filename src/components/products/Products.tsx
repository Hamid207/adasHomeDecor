import { Link } from "react-router-dom";
import ProductsGrid from "./productsGrid/ProductsGrid";
import style from "./Products.module.css";
import { useSelector } from "react-redux";

import { RootState } from "../../store/Store";
import { Categorie } from "../../services/categories.service";
import { Product } from "../../services/products.service";

const Products = () => {
  window.scrollTo(0, 0);
  const products = useSelector((state: RootState) => state.productts);
  return (
    <section>
      <div className={style.body}>
        <div className={style.title_body}>
          <h2>PRODUCTS</h2>
          <Link to="/" className={style.see_all}>
            SEE ALL
          </Link>
        </div>
        <div className={style.grid_body}>
          {products
            .filter((product: Product) => product.id < 11)
            .map((product: Product) => {
              return (
                <ProductsGrid
                  name={product.title}
                  height="267px"
                  width="330px"
                  img={product.image}
                  price={product.price}
                  id={product.id}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Products;

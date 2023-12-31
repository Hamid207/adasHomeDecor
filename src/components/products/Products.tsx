import { Link } from "react-router-dom";
import ProductsGrid from "./productsGrid/ProductsGrid";
import style from "./Products.module.css";

const Products = () => {
  return (
    <div className={style.body}>
      <div className={style.title_body}>
        <h2>PRODUCTS</h2>
        <Link to="/" className={style.see_all}>
          SEE ALL
        </Link>
      </div>
      <div className={style.grid_body}>
        <ProductsGrid />
        <ProductsGrid />
        <ProductsGrid />
        <ProductsGrid />
        <ProductsGrid />
        <ProductsGrid />
        <ProductsGrid />
        <ProductsGrid />
      </div>
    </div>
  );
};

export default Products;

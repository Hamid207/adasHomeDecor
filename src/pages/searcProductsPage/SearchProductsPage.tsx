import { useSelector } from "react-redux";
import ProductsGrid from "../../components/products/productsGrid/ProductsGrid";
import style from "./SearchProductsPage.module.css";
import { RootState } from "../../store/Store";
import { Product } from "../../services/products.service";

const SearchProductsPage = () => {
  const products = useSelector((state: RootState) => state.productts);
  const serachValue = useSelector(
    (state: RootState) => state.searchOpacityView.searchValue
  );
  const searcgProducts = products.filter((products: Product) => {
    return products.title.toLowerCase().includes(serachValue.toLowerCase());
  });

  return (
    <>
      <div className={style.navigation_title_body}>
        <ul>
          <li>Home</li>
          <li>Search results</li>
        </ul>
      </div>
      <p className={style.title}>SEARCH RESULTS</p>
      <p className={style.info_text}>
        Your search results for "{serachValue}".
      </p>
      {(searcgProducts.length != 0 && (
        <div className={style.serachPage_grid}>
          {searcgProducts.map((product: Product) => {
            return (
              <ProductsGrid
                name={product.title}
                height="267px"
                width="330px"
                img={product.image}
                price={product.price}
                desc={product.desc}
                id={product.id}
              />
            );
          })}
        </div>
      )) || (
        <div className={style.serach_result_zero}>
          <p>The search didn't yield any results!</p>
        </div>
      )}
    </>
  );
};

export default SearchProductsPage;

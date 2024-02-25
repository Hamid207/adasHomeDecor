import { useSelector } from "react-redux";
import ProductsGrid from "../products/productsGrid/ProductsGrid";
import CustomLink from "../ui/customLink/CustomLink";
import style from "./ProductsMain.module.css";
import { RootState } from "../../store/Store";
import { Product } from "../../services/products.service";
import { useParams } from "react-router-dom";
import { useState } from "react";

const categoriesArray = [
  { id: 0, name: "ALL" },
  { id: 1, name: "SOFAS" },
  { id: 2, name: "BEDS AND HEADBOARDS" },
  { id: 3, name: "RUGS" },
  { id: 4, name: "CUSHIONS" },
  { id: 5, name: "HEADBOARDS" },
];

const collections = [
  { id: 0, name: "ALL" },
  { id: 1, name: "LIVING ROOM" },
  { id: 2, name: "BEDROOM" },
  { id: 3, name: "KITCHEN" },
  { id: 4, name: "LIBRARY" },
  { id: 5, name: "OFFICE" },
  { id: 6, name: "LAUNDRY ROOM" },
  { id: 7, name: "GUEST ROOM" },
  { id: 8, name: "FAMILY ROOM" },
  { id: 9, name: "BATHROOM" },
];

const ProductsMain: React.FC = () => {
  const { id } = useParams() as { id: string };

  const products = useSelector((state: RootState) => state.productts);

  const collections2 = [
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

  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([0]);
  const [selectedCollectionIds, setSelectedCollectionIds] = useState<number[]>([
    0,
  ]);

  const handleCategoryChange = (id: number) => {
    let updatedSelected = [];
    if (id === 0) {
      updatedSelected = [0];
    } else {
      updatedSelected = selectedCategoryIds.filter((cid) => cid !== 0);
      if (selectedCategoryIds.includes(id)) {
        updatedSelected = updatedSelected.filter((cid) => cid !== id);
      } else {
        updatedSelected.push(id);
      }
    }
    setSelectedCategoryIds(updatedSelected);
  };

  const handleCollectionChange = (id: number) => {
    let updatedSelected = [];
    if (id === 0) {
      updatedSelected = [0];
    } else {
      updatedSelected = selectedCollectionIds.filter((cid) => cid !== 0);
      if (selectedCollectionIds.includes(id)) {
        updatedSelected = updatedSelected.filter((cid) => cid !== id);
      } else {
        updatedSelected.push(id);
      }
    }
    setSelectedCollectionIds(updatedSelected);
  };

  const filteredProducts = products.filter((product: Product) => {
    const isCategoryMatch =
      selectedCategoryIds.includes(0) ||
      selectedCategoryIds.includes(product.categoriesId);
    const isCollectionMatch =
      selectedCollectionIds.includes(0) ||
      selectedCollectionIds.includes(product.collectionId);
    return isCategoryMatch && isCollectionMatch;
  });

  return (
    <section>
      <div className={style.body}>
        <div className={style.navigation_title_body}>
          <ul>
            <li>Home</li>
            <li>
              {(id && convertToTitleCase(collections2[Number(id)])) ||
                "Products"}
            </li>
          </ul>
        </div>
        <p>{(id && collections2[Number(id)]) || "Products"}</p>
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
            <h2>Categories</h2>
            {categoriesArray.map((category) => (
              <div key={category.id}>
                <input
                  className={style.input}
                  type="checkbox"
                  id={`cat-${category.id}`}
                  checked={selectedCategoryIds.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                />
                <label className={style.label} htmlFor={`cat-${category.id}`}>
                  {category.name}
                </label>
              </div>
            ))}

            <h2 className={style.for_top}>Collections</h2>
            {collections.map((collection) => (
              <div key={collection.id}>
                <input
                  className={style.input}
                  type="checkbox"
                  id={`col-${collection.id}`}
                  checked={selectedCollectionIds.includes(collection.id)}
                  onChange={() => handleCollectionChange(collection.id)}
                />
                <label className={style.label} htmlFor={`col-${collection.id}`}>
                  {collection.name}
                </label>
              </div>
            ))}
            {/* <ProductsList name="CATEGORIES" lists={cateforiesArray} id={id} />
            <ProductsList name="COLLECTIONS" lists={collections} id={id} /> */}
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
              filteredProducts.map((product: Product) => (
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
              ))}
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

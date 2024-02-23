import style from "./AhoppingCartPage.module.css";
import CustomLink from "../../components/ui/customLink/CustomLink";
import ShoppingCard from "../../components/shoppingCart/ShoppingCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { ShoppingCartModel } from "../../services/shoppingCart.service";
import { itemCountEmpty } from "../../store/slices/shoppingCartItemsCountAndPriceCountSlice";

const ShoppingCartPage = () => {
  const shoppingCarts = useSelector((state: RootState) => state.shoppingCart);
  const shoppingCartsTotalPrice = useSelector(
    (state: RootState) => state.shoppingCartItemCountAndToalPrice.itemCount
  );

  return (
    <div>
      <div className={style.navigation_title_body}>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
        <h2>SHOPPING CART</h2>
      </div>
      <div className={style.shoppingCart_body}>
        <div>
          {shoppingCarts.map((cart: ShoppingCartModel) => {
            return (
              <ShoppingCard
                id={cart.id}
                title={cart.title}
                image={cart.image}
                price={cart.price}
                count={cart.count}
                countPrice={cart.countPrice}
              />
            );
          })}
        </div>
        <div className={style.right_body}>
          <h3>SUMMARY</h3>
          <div>
            <p>ITEM COUNT</p>
            <p>{shoppingCarts.length}</p>
          </div>
          <div>
            <p>TOTAL PRICE</p>
            <p>{shoppingCartsTotalPrice}$</p>
          </div>
          <CustomLink
            to="/"
            text="CHECKOUT"
            width="270px"
            height="54px"
            backColor="brown"
            hidden
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;

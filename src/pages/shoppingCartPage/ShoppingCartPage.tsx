import style from "./AhoppingCartPage.module.css";
import CustomLink from "../../components/ui/customLink/CustomLink";
import ShoppingCard from "../../components/shoppingCart/ShoppingCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { ShoppingCartModel } from "../../services/shoppingCart.service";

const ShoppingCartPage = () => {
  const shoppingCarts = useSelector((state: RootState) => state.shoppingCart);

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
              />
            );
          })}
        </div>
        <div className={style.right_body}>
          <h3>SUMMARY</h3>
          <div>
            <p>ITEM COUNT</p>
            <p>4</p>
          </div>
          <div>
            <p>TOTAL PRICE</p>
            <p>460$</p>
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

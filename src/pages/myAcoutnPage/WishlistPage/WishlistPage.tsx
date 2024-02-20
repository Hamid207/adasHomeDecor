import { useSelector } from "react-redux";
import WishlistCart from "../../../components/wishListCart/WishlistCart";
import style from "./WishlistPage.module.css";
import { RootState } from "../../../store/Store";
import { FavoritesModel } from "../../../services/favorites.service";

const WishlistPage = () => {
  const favorites = useSelector((state: RootState) => state.faforites);

  return (
    <div>
      {favorites.map((favorit: FavoritesModel) => {
        return (
          <WishlistCart
            name={favorit.title}
            price={favorit.price}
            image={favorit.image}
            id={favorit.id}
          />
        );
      })}
    </div>
  );
};

export default WishlistPage;

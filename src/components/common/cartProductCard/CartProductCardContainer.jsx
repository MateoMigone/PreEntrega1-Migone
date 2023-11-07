import { useContext } from "react";
import CartProductCard from "./CartProductCard";
import { CartContext } from "../../../context/CartContext";

const CartProductCardContainer = ({ item }) => {
  const { deleteProductFromCartById } = useContext(CartContext);
  return (
    <CartProductCard
      item={item}
      deleteProductFromCart={deleteProductFromCartById}
    />
  );
};

export default CartProductCardContainer;

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CartProductCard from "./CartProductCard";

const CartProductCardContainer = ({ item }) => {
  return <CartProductCard item={item} />;
};

export default CartProductCardContainer;

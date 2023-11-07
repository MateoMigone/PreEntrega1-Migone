import { useContext } from "react";
import CartWidget from "./CartWidget";
import { CartContext } from "../../../context/CartContext";

const CartWidgetContainer = () => {
  const { getTotalQty } = useContext(CartContext);
  return <CartWidget getTotalQty={getTotalQty} />;
};

export default CartWidgetContainer;

import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, getTotalQty, getTotalPrice } = useContext(CartContext);

  return (
    <Cart
      carrito={cart}
      getTotalQty={getTotalQty}
      getTotalPrice={getTotalPrice}
    />
  );
};

export default CartContainer;

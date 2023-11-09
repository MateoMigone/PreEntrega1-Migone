import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, getTotalQty, getTotalPrice, clearCart } =
    useContext(CartContext);
  let totalQty = getTotalQty();
  let totalPrice = getTotalPrice();

  return (
    <Cart
      carrito={cart}
      totalQty={totalQty}
      totalPrice={totalPrice}
      clearCart={clearCart}
    />
  );
};

export default CartContainer;

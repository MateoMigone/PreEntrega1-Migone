import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const updateCart = (product) => {
    let exists = cart.some((productInCart) => productInCart.id === product.id);
    exists ? updateProduct(product) : addProduct(product);
  };

  const updateProduct = (product) => {
    let newArr = cart.map((productInCart) =>
      productInCart.id === product.id
        ? { ...productInCart, quantity: product.quantity }
        : productInCart
    );
    setCart(newArr);
    localStorage.setItem("cart", JSON.stringify(newArr));
  };

  const addProduct = (product) => {
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
  };

  let data = { cart, updateCart };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;

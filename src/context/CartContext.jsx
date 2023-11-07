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

  const getTotalQty = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.quantity;
    });
    return total;
  };

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  const deleteProductFromCartById = (id) => {
    let filteredArray = cart.filter((product) => product.id !== id);
    setCart(filteredArray);
    localStorage.setItem("cart", JSON.stringify(filteredArray));
  };

  let data = {
    cart,
    updateCart,
    getTotalQty,
    getTotalPrice,
    deleteProductFromCartById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;

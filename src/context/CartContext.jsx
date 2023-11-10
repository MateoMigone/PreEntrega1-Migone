import { createContext, useState } from "react";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const updateCart = (product) => {
    let exists = cart.some((productInCart) => productInCart.id === product.id);
    exists ? updateProduct(product) : addProduct(product);
    Toastify({
      text: `Se agregó ${product.title} (x${product.quantity}) a tu carrito de compras!`,
      position: "right",
      gravity: "bottom",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #00b09b, #16e05b)",
      },
    }).showToast();
  };

  const updateProduct = (product) => {
    let newArr = cart.map(
      (productInCart) =>
        productInCart.id === product.id && {
          ...productInCart,
          quantity: productInCart.quantity + product.quantity,
        }
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
    Toastify({
      text: `Se eliminaron los productos del carrito de compras!`,
      position: "right",
      gravity: "bottom",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #d92525, #eb9336)",
      },
    }).showToast();
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");

    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Se vació correctamente el carrito!",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const findProductInCart = (id) => {
    return cart.find((product) => product.id === id);
  };

  let data = {
    cart,
    updateCart,
    getTotalQty,
    getTotalPrice,
    deleteProductFromCartById,
    clearCart,
    findProductInCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;

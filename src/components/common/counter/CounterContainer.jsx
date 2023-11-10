import { useContext, useState } from "react";
import Counter from "./Counter";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, productId }) => {
  const [cantidad, setCantidad] = useState(1);

  const { findProductInCart } = useContext(CartContext);

  const productInCart = findProductInCart(productId);
  const qtyInCart = productInCart ? productInCart.quantity : 0;

  const agregar = () => {
    cantidad < stock
      ? setCantidad(cantidad + 1)
      : alert("No hay mas unidades en stock");
  };
  const quitar = () => {
    cantidad > 1
      ? setCantidad(cantidad - 1)
      : alert("El míninimo de unidades es 1");
  };

  const addToCart = (qty) => {
    onAdd(qty);
    setCantidad(1);
    stock === qty + qtyInCart &&
      Swal.fire({
        title: "Atención!",
        text: "Alcanzaste el límite de stock disponible para este producto!",
        icon: "warning",
      });
  };
  return (
    <Counter
      qty={cantidad}
      increase={agregar}
      decrease={quitar}
      addToCart={addToCart}
      stock={stock}
      qtyInCart={qtyInCart}
    />
  );
};

export default CounterContainer;

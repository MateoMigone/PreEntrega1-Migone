import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(1);

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
  return (
    <Counter
      qty={cantidad}
      increase={agregar}
      decrease={quitar}
      onAdd={onAdd}
    />
  );
};

export default CounterContainer;

import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div>Este es tu carrito de compras!</div>
      <Link to={"/checkout"}> Ir al checkout</Link>
    </>
  );
};

export default Cart;

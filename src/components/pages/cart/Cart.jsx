import { Link } from "react-router-dom";
import CartProductCardContainer from "../../common/cartProductCard/CartProductCardContainer";
import "./cart.css";
import { Button } from "@mui/material";

function Cart({ carrito, getTotalQty, getTotalPrice }) {
  let totalQty = getTotalQty();
  let totalPrice = getTotalPrice();
  return (
    <section className="cart-section">
      <section className="cart-container">
        {carrito.map((item) => (
          <CartProductCardContainer key={item.id} item={item} />
        ))}
      </section>
      <section className="cart-detail">
        <h2>Resumen del carrito</h2>
        <table>
          <tr>
            <td>Cantidad de productos</td>
            <td>{totalQty}</td>
          </tr>
          <tr className="precio-final">
            <td>TOTAL</td>
            <td>${totalPrice}</td>
          </tr>
        </table>
        <Link to={"/checkout"} className="btn-continuar-compra">
          <Button variant="contained">Continuar compra</Button>
        </Link>
      </section>
    </section>
  );
}

export default Cart;

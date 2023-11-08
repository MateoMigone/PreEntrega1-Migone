import { Link } from "react-router-dom";
import CartProductCardContainer from "../../common/cartProductCard/CartProductCardContainer";
import "./cart.css";
import { Button } from "@mui/material";

function Cart({ carrito, totalQty, totalPrice }) {
  return (
    <section className="cart-section">
      {carrito.length > 0 && (
        <>
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
        </>
      )}
      {carrito.length === 0 && (
        <div className="empty-cart-container">
          <div className="empty-cart-text">
            <h2>Ups, tu carrito está vacío!</h2>
            <p>Las mejores camisetas están disponibles en nuestra tienda!</p>
            <p>Que esperás para llenar el carrito?</p>
          </div>
          <Link to={"/"}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ fontSize: "1.2rem", color: "white" }}
            >
              Ir a la tienda
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}

export default Cart;

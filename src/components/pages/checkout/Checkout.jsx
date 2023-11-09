import { Button, TextField } from "@mui/material";
import "./checkout.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Checkout = ({ handleSubmit, handleChange, errors, orderId }) => {
  return (
    <>
      {orderId ? (
        <>
          <section className="order-container">
            <h3>
              <span>Tu numero de orden es:</span>{" "}
              <span className="order-id"> {orderId}</span>
            </h3>
            <Link to={"/"}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ color: "white" }}
                className="home-btn"
                size="large"
              >
                <HomeIcon /> <span>Volver al inicio</span>
              </Button>
            </Link>
          </section>
        </>
      ) : (
        <section className="checkout-container">
          <h2 className="checkout-titulo">
            Completar con sus datos a continuación para finalizar con la compra:
          </h2>
          <form onSubmit={handleSubmit} className="checkout-form">
            <TextField
              label="Nombre"
              name="nombre"
              variant="outlined"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
            <TextField
              label="Apellido"
              name="apellido"
              variant="outlined"
              onChange={handleChange}
              error={errors.apellido ? true : false}
              helperText={errors.apellido}
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
            <Button variant="contained" type="submit">
              Finalizar compra
            </Button>
          </form>
        </section>
      )}
    </>
  );
};

export default Checkout;

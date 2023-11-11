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
              <span>Tu numero de orden es:</span>
              <span className="order-id"> {orderId}</span>
            </h3>
            <Link to={"/"}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ color: "white" }}
                className="home-btn"
                size="medium"
              >
                <HomeIcon
                  sx={{ fontSize: { md: "1.8rem", lg: "2rem", xl: "3rem" } }}
                />
                <span>Volver al inicio</span>
              </Button>
            </Link>
          </section>
        </>
      ) : (
        <section className="checkout-container">
          <h2 className="checkout-titulo">
            COMPLETAR CON SUS DATOS PARA FINALIZAR CON LA COMPRA:
          </h2>
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-inputs-container">
              <TextField
                label="Nombre"
                name="nombre"
                variant="outlined"
                onChange={handleChange}
                error={errors.nombre ? true : false}
                helperText={errors.nombre}
                size="small"
                className="input-info"
              />
              <TextField
                label="Apellido"
                name="apellido"
                variant="outlined"
                onChange={handleChange}
                error={errors.apellido ? true : false}
                helperText={errors.apellido}
                size="small"
                className="input-info"
              />
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email}
                size="small"
                className="input-info"
              />
            </div>
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

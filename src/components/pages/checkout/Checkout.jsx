import { Button, TextField } from "@mui/material";
import "./checkout.css";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <section className="checkout-container">
      <h3 className="checkout-titulo">
        Completar con sus datos a continuación para finalizar con la compra:
      </h3>
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
          Enviar
        </Button>
      </form>
    </section>
  );
};

export default Checkout;

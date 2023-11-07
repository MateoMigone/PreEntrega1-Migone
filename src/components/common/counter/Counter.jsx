import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, IconButton } from "@mui/material";
import "./counter.css";

const Counter = ({ qty, increase, decrease, onAdd }) => {
  return (
    <section className="counter-container">
      <div className="counter">
        CANTIDAD
        <IconButton
          onClick={decrease}
          className="rmvIcon"
          aria-label="decrease"
        >
          <RemoveIcon />
        </IconButton>
        {qty}
        <IconButton
          onClick={increase}
          className="addIcon"
          aria-label="increase"
        >
          <AddIcon />
        </IconButton>
      </div>
      <Button
        size="large"
        color="secondary"
        variant="contained"
        sx={{ color: "white" }}
        onClick={() => {
          onAdd(qty);
        }}
      >
        Agregar al carrito
      </Button>
    </section>
  );
};

export default Counter;

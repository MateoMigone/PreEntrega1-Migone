import CounterContainer from "../../common/counter/CounterContainer";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "./itemDetail.css";
import { Button } from "@mui/material";

const ItemDetail = ({ productoSeleccionado }) => {
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: "50vw",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <Box className="item-detail-info">
        <Box className="item-detail-text">
          <Typography component="div" variant="h5">
            {productoSeleccionado.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {productoSeleccionado.description}
          </Typography>
          <Typography
            variant="overline"
            fontSize={"1.5rem"}
            fontWeight={"bold"}
          >
            ${productoSeleccionado.price}
          </Typography>
        </Box>
        <Box className="add-item-container">
          <Typography variant="overline" fontSize={"1rem"}>
            <CounterContainer stock={productoSeleccionado.stock} />
          </Typography>
          <Button
            size="large"
            color="secondary"
            variant="contained"
            sx={{ color: "white" }}
          >
            Agregar al carrito
          </Button>
        </Box>
      </Box>
      <img
        src={productoSeleccionado.img}
        alt={productoSeleccionado.title}
        className="item-detail-img"
      />
    </Card>
  );
};

export default ItemDetail;

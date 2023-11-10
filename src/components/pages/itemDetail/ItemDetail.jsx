import CounterContainer from "../../common/counter/CounterContainer";
import { Box, Card, Typography, CircularProgress } from "@mui/material";
import "./itemDetail.css";

const ItemDetail = ({ productoSeleccionado, onAdd }) => {
  return (
    <>
      {productoSeleccionado.title ? (
        <Card className="item-detail-card">
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
            {productoSeleccionado.stock ? (
              <CounterContainer
                stock={productoSeleccionado.stock}
                onAdd={onAdd}
                productId={productoSeleccionado.id}
              />
            ) : (
              <div className="no-stock-container">
                <Typography
                  variant="overline"
                  fontSize="1rem"
                  fontWeight="bold"
                >
                  Sin stock
                </Typography>
              </div>
            )}
          </Box>
          <img
            src={productoSeleccionado.img}
            alt={productoSeleccionado.title}
            className="item-detail-img"
          />
        </Card>
      ) : (
        <CircularProgress size={80} />
      )}
    </>
  );
};

export default ItemDetail;

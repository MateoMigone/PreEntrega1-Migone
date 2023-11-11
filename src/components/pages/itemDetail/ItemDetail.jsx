import CounterContainer from "../../common/counter/CounterContainer";
import { Box, Card, Typography, CircularProgress } from "@mui/material";
import "./itemDetail.css";

const ItemDetail = ({ productoSeleccionado, onAdd }) => {
  return (
    <>
      {productoSeleccionado.title ? (
        <Card
          className="item-detail-card"
          sx={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
        >
          <Box className="item-detail-info">
            <Box className="item-detail-text">
              <Typography
                component="div"
                variant="h5"
                sx={{
                  fontWeight: "medium",
                  fontSize: {
                    xs: "1.4rem",
                    sm: "0.9rem",
                    md: "1.1rem",
                    lg: "1.3rem",
                    xl: "1.5rem",
                  },
                }}
                className="item-detail-title"
              >
                {productoSeleccionado.title}
              </Typography>

              <Typography
                variant="subtitle1"
                component="div"
                className="item-detail-description"
                sx={{
                  fontSize: {
                    xs: "0.9rem",
                    sm: "0.7rem",
                    md: "0.8rem",
                    lg: "0.9rem",
                    xl: "1rem",
                  },
                }}
              >
                <Typography
                  className="item-detail-price"
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: "1.4rem",
                      sm: "0.9rem",
                      md: "1.1rem",
                      lg: "1.3rem",
                      xl: "1.5rem",
                    },
                    paddingBottom: {
                      xs: "0.5rem",
                      md: "0.3rem",
                      lg: "0.5rem",
                      xl: "0.9rem",
                    },
                  }}
                >
                  ${productoSeleccionado.price}
                </Typography>
                {productoSeleccionado.description}
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "0.9rem", lg: "1rem" },
                  }}
                >
                  Sin stock
                </Typography>
              </div>
            )}
          </Box>
          <hr />
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

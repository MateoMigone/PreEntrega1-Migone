import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import "./cartProductCard.css";

const CartProductCard = ({ item, deleteProductFromCart }) => {
  return (
    <div className="cart-card-container ">
      <Card>
        <Link to={`/itemDetail/${item.id}`}>
          <CardActionArea
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: { xs: 320, sm: 480, lg: 650, xl: 900 },
              color: "black",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 2.5, lg: 4 },
                }}
              >
                <Typography
                  component="div"
                  variant="h5"
                  sx={{
                    borderBottom: "1px solid rgb(175, 175, 175)",
                    fontSize: { xs: "0.7rem", sm: "1rem", lg: "1.5rem" },
                  }}
                >
                  {item.title}
                </Typography>
                <Box sx={{ display: "flex", gap: "0.8rem" }}>
                  <Typography
                    variant="overline"
                    component="div"
                    className="tag-detail"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "0.5rem", sm: "0.6rem", lg: "0.75rem" },
                    }}
                  >
                    Precio: ${item.price}
                  </Typography>
                  <Typography
                    variant="overline"
                    component="div"
                    className="tag-detail"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "0.5rem", sm: "0.6rem", lg: "0.75rem" },
                    }}
                  >
                    Cantidad: {item.quantity}
                  </Typography>
                </Box>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{
                width: { xs: 100, sm: 110, lg: 130 },
                height: { xs: 100, sm: 110, lg: 130 },
                padding: 1.5,
              }}
              image={item.img}
              alt={item.title}
            />
          </CardActionArea>
        </Link>
      </Card>
      <button
        className="delete-icon"
        onClick={() => deleteProductFromCart(item.id)}
      >
        <DeleteIcon
          color="secondary"
          sx={{ fontSize: { xs: "35px", sm: "40px", lg: "50px" } }}
        />
      </button>
    </div>
  );
};

export default CartProductCard;

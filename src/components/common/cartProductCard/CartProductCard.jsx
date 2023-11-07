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
              width: 900,
              color: "black",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <Typography
                  component="div"
                  variant="h5"
                  sx={{ borderBottom: "1px solid rgb(175, 175, 175)" }}
                >
                  {item.title}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="overline" component="div">
                    Precio: ${item.price}
                  </Typography>
                  <Typography variant="overline" component="div">
                    Cantidad:{item.quantity}
                  </Typography>
                </Box>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 130, height: 130, padding: 1.5 }}
              image={item.img}
              alt="Live from space album cover"
            />
          </CardActionArea>
        </Link>
      </Card>
      <button
        className="delete-icon"
        onClick={() => deleteProductFromCart(item.id)}
      >
        <DeleteIcon color="secondary" sx={{ fontSize: "50px" }} />
      </button>
    </div>
  );
};

export default CartProductCard;

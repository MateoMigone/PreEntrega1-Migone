import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const CartProductCard = ({ item }) => {
  return (
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
              <Typography component="div" variant="h5">
                {item.title}
                <hr />
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
  );
};

export default CartProductCard;

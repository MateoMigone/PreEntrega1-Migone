import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card
      sx={{
        width: { xs: 268, sm: 175, lg: 200, xl: 345 },
        "&:hover": { boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" },
      }}
    >
      <div className="img-container">
        <img src={item.img} alt={item.title} />
      </div>
      <CardContent className="product-card-title-container">
        <Typography
          variant="h5"
          component="div"
          fontWeight={"medium"}
          className="product-card-title"
          sx={{ fontSize: { xs: "1rem", xl: "1.5rem" } }}
        >
          {item.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", marginBottom: "1rem" }}>
        <Link
          to={`/itemDetail/${item.id}`}
          className="product-card-btn-container"
        >
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            className="product-card-btn"
            sx={{ color: "white" }}
          >
            Ver Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

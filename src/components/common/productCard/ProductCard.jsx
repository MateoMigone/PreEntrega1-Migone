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
        maxWidth: 345,
        "&:hover": { boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" },
      }}
    >
      <div className="img-container">
        <img src={item.img} alt={item.title} />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            sx={{ fontWeight: "bold" }}
          >
            Ver Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

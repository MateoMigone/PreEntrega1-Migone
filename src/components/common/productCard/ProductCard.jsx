import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./productCard.css";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Button size="small" color="primary">
          Ver Detalle
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

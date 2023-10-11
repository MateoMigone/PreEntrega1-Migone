import styled from "@emotion/styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 5,
    border: `4px solid #1d9e49`,
    borderRadius: "20px",
    backgroundColor: "secondary",
    padding: "10px 6px",
    fontSize: "16px",
    color: "white",
  },
}));

const CartWidget = () => {
  return (
    <Link to="/cart">
      <StyledBadge badgeContent={3} color="secondary">
        <ShoppingCartIcon sx={{ fontSize: "35px", color: "white" }} />
      </StyledBadge>
    </Link>
  );
};

export default CartWidget;

import styled from "@emotion/styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(() => ({
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

const CartWidget = ({ getTotalQty }) => {
  let totalQty = getTotalQty();
  return (
    <Link to="/cart">
      <StyledBadge showZero badgeContent={totalQty} color="secondary">
        <ShoppingCartIcon sx={{ fontSize: "35px", color: "white" }} />
      </StyledBadge>
    </Link>
  );
};

export default CartWidget;

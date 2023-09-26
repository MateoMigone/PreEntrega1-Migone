import React from "react";
import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 5,
    border: `4px solid #1976d2`,
    borderRadius: "20px",
    backgroundColor: "secondary",
    padding: "10px 6px",
    fontSize: "16px",
  },
}));

const CartWidget = () => {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={3} color="secondary">
        <ShoppingCartIcon sx={{ fontSize: "35px", color: "white" }} />
      </StyledBadge>
    </IconButton>
  );
};

export default CartWidget;

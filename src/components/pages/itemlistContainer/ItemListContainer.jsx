import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <Grid container columns={12} justifyContent={"center"}>
      <Grid
        item
        xs={6}
        boxShadow={4}
        p={3}
        mt={3}
        sx={{ backgroundColor: "#add8e6", textAlign: "center" }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "inherit", color: "inherit" }}
        >
          {greeting}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ItemListContainer;

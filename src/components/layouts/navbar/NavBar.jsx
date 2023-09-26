import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CartWidget from "../../common/cartWidget/CartWidget";

const pages = ["sobre nosotros", "productos", "galeria de fotos"];

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="none">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            FUTB
            <SportsSoccerIcon sx={{ fontSize: "22px", mr: 0.5 }} />
            L RETR
            <SportsSoccerIcon sx={{ fontSize: "22px", mr: 0.5 }} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "end",
              gap: "1rem",
              marginRight: "100px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: { sm: "9px", md: "12px", lg: "18px" },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

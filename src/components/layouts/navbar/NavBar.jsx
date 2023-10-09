import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1d9e49" }}>
      <Container maxWidth="none">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h5"
              noWrap
              className="logo"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
              }}
            >
              FUTB
              <SportsSoccerIcon sx={{ fontSize: "22px", mr: 0.5 }} />
              L RETR
              <SportsSoccerIcon sx={{ fontSize: "22px", mr: 0.5 }} />
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "end",
              gap: "1rem",
              marginRight: "100px",
            }}
          >
            <Link to="/">
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: { sm: "9px", md: "12px", lg: "18px" },
                }}
              >
                {" "}
                Todos{" "}
              </Button>
            </Link>
            <Link to="/category/sudamerica">
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: { sm: "9px", md: "12px", lg: "18px" },
                }}
              >
                {" "}
                Sudamérica{" "}
              </Button>
            </Link>
            <Link to="/category/europa">
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: { sm: "9px", md: "12px", lg: "18px" },
                }}
              >
                {" "}
                Europa{" "}
              </Button>
            </Link>
          </Box>
          <CartWidgetContainer />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

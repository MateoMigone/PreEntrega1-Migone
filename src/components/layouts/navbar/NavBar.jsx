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
                fontSize: { xs: "14px", sm: "18px", md: "24px" },
              }}
            >
              FUTB
              <SportsSoccerIcon
                sx={{
                  fontSize: { xs: "14px", sm: "18px", md: "24px" },
                  mr: 0.5,
                }}
              />
              L RETR
              <SportsSoccerIcon
                sx={{ fontSize: { xs: "14px", sm: "18px", md: "24px" } }}
              />
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "end",
              gap: { xs: 0, sm: "1rem" },
              marginRight: { xs: 0, sm: "20px", md: "100px" },
            }}
          >
            <Link to="/">
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  fontSize: { xs: "10px", sm: "15px", lg: "18px" },
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                Todos
              </Button>
            </Link>
            <Link to="/category/sudamerica">
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  fontSize: { xs: "10px", sm: "15px", lg: "18px" },
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                Sudamérica
              </Button>
            </Link>
            <Link to="/category/europa">
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  fontSize: { xs: "10px", sm: "15px", lg: "18px" },
                  paddingLeft: 0,
                  paddingRight: 0,
                }}
              >
                Europa
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

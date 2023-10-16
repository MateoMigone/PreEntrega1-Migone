import { BrowserRouter } from "react-router-dom";
import { customTheme } from "./themeConfig";
import { ThemeProvider } from "@mui/material";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

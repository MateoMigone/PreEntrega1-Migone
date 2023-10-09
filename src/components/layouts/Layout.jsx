import { Outlet } from "react-router-dom";
import FooterContainer from "./footer/FooterContainer";
import NavBarContainer from "./navbar/NavBarContainer";
import "./layout.css";

const Layout = () => {
  return (
    <body>
      <header style={{ height: "10vh" }}>
        <NavBarContainer />
      </header>
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
      <footer style={{ height: "10vh" }}>
        <FooterContainer />
      </footer>
    </body>
  );
};

export default Layout;

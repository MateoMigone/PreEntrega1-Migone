import { Outlet } from "react-router-dom";
import FooterContainer from "./footer/FooterContainer";
import NavBarContainer from "./navbar/NavBarContainer";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <header>
        <NavBarContainer />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterContainer />
      </footer>
    </>
  );
};

export default Layout;

import FooterContainer from "./components/layouts/footer/FooterContainer";
import NavBarContainer from "./components/layouts/navbar/NavBarContainer";
import ItemListContainer from "./components/pages/itemlistContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBarContainer />
      <ItemListContainer greeting={"Bienvenido a Futbol Retro!"} />
      <FooterContainer />
    </>
  );
}

export default App;

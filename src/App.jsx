import NavBar from "./components/layouts/navbar/NavBar";
import ItemListContainer from "./components/pages/itemlistContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a Futbol Retro!"} />
    </>
  );
}

export default App;

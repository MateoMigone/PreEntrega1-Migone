import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutContainer from "./components/layouts/LayoutContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemListContainer from "./components/pages/itemlist/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutContainer />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<CartContainer />} />

          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

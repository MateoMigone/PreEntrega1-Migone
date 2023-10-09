import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cargarItems = new Promise((resolve, reject) => {
      products ? resolve(products) : reject("Error, no se encontraron items");
    });

    cargarItems
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;

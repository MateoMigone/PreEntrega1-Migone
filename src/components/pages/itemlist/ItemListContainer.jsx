import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getDocs,
  collection,
  query,
  where /* addDoc */,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
/* import { products } from "../../../productsMock";
import { Button } from "@mui/material"; */

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [categoryChange, setCategoryChange] = useState(false);

  const { categoryName } = useParams();

  useEffect(() => {
    setCategoryChange(true);
    let productsCollection = collection(db, "products");

    let consulta = categoryName
      ? query(productsCollection, where("category", "==", categoryName))
      : productsCollection;

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });

      setItems(newArray);
      setCategoryChange(false);
    });
  }, [categoryName]);

  return (
    <>
      <ItemList
        items={items}
        categoryName={categoryName}
        categoryChange={categoryChange}
      />
    </>
  );
};

export default ItemListContainer;

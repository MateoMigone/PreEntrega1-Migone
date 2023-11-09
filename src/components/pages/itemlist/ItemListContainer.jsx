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
  const [change, setChange] = useState(false);

  const { categoryName } = useParams();

  /* const rellenarFirebaseDB = () => {
    const prodCol = collection(db, "products");
    products.forEach((element) => {
      addDoc(prodCol, element);
    });
  }; */

  useEffect(() => {
    setChange(true);
    let productsCollection = collection(db, "products");

    let consulta = categoryName
      ? query(productsCollection, where("category", "==", categoryName))
      : productsCollection;

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });

      setItems(newArray);
      setChange(false);
    });
  }, [categoryName]);

  return (
    <>
      {/* <Button onClick={rellenarFirebaseDB}>Rellenar base de datos de firebase con el array de productsMock</Button> */}
      <ItemList items={items} categoryName={categoryName} change={change} />
    </>
  );
};

export default ItemListContainer;

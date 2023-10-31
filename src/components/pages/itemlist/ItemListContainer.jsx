import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = categoryName
      ? query(productsCollection, where("category", "==", categoryName))
      : productsCollection;

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });

      setItems(newArray);
    });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;

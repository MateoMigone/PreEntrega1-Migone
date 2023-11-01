import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemDetailContainer = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");

    let selectedDoc = doc(productsCollection, id);

    getDoc(selectedDoc).then((res) => {
      setProductoSeleccionado({ id: res.id, ...res.data() });
    });
  }, [id]);

  return <ItemDetail productoSeleccionado={productoSeleccionado} />;
};

export default ItemDetailContainer;

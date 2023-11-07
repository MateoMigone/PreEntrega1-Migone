import ItemDetail from "./ItemDetail";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { CartContext } from "../../../context/CartContext";

const ItemDetailContainer = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  const { updateCart } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");

    let selectedDoc = doc(productsCollection, id);

    getDoc(selectedDoc).then((res) => {
      setProductoSeleccionado({ id: res.id, ...res.data() });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let item = {
      ...productoSeleccionado,
      quantity: cantidad,
    };
    updateCart(item);
  };

  return (
    <ItemDetail productoSeleccionado={productoSeleccionado} onAdd={onAdd} />
  );
};

export default ItemDetailContainer;

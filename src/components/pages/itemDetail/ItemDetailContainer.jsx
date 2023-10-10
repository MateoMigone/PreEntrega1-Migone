import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productoEncontrado = products.find((product) => product.id === +id);

    const getProductoEncontrado = new Promise((resolve, reject) => {
      resolve(productoEncontrado);
    });

    getProductoEncontrado
      .then((res) => setProductoSeleccionado(res))
      .catch((err) => console.log(err));
  }, [id]);

  return <ItemDetail productoSeleccionado={productoSeleccionado} />;
};

export default ItemDetailContainer;

import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ productoSeleccionado }) => {
  return <CounterContainer stock={productoSeleccionado.stock} />;
};

export default ItemDetail;

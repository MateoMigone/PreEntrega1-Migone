import { useFormik } from "formik";
import Checkout from "./Checkout";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import {
  serverTimestamp,
  addDoc,
  collection,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Swal from "sweetalert2";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const totalPrice = getTotalPrice();

  const [orderId, setOrderId] = useState(null);

  const agregarOrdenCompra = (orden) => {
    const orderCol = collection(db, "orders");
    addDoc(orderCol, orden).then((res) => setOrderId(res.id));
    cart.forEach((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, {
        stock: product.stock - product.quantity,
      });
      clearCart();
    });
  };

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { nombre: "", apellido: "", email: "" },
    onSubmit: (userData) => {
      Swal.fire({
        title: "Estás seguro de que quieres finalizar la compra?",
        showCancelButton: true,
        confirmButtonColor: "#1d9e49",
        cancelButtonColor: "#d92525",
        confirmButtonText: "Si, estoy seguro",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          let order = {
            buyer: userData,
            items: cart,
            total: totalPrice,
            date: serverTimestamp(),
          };
          agregarOrdenCompra(order);

          Swal.fire({
            title: "Tu compra se realizó con éxito!",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false,
          });
        }
      });
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(4, "El nombre debe tener al menos 4 caracteres")
        .max(17, "El nombre debe tener como máximo 17 caracteres"),
      apellido: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El apellido debe tener al menos 3 caracteres")
        .max(18, "El apellido debe tener como máximo 18 caracteres"),
      email: Yup.string()
        .email("Debe ingresar un email válido")
        .required("Este campo es obligatorio"),
    }),
  });

  return (
    <Checkout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      orderId={orderId}
    />
  );
};

export default CheckoutContainer;

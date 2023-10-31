import { useFormik } from "formik";
import Checkout from "./Checkout";
import * as Yup from "yup";

const CheckoutContainer = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { nombre: "", apellido: "", email: "" },
    onSubmit: (data) => {
      console.log(data);
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
        .email("Debe respetarse el formato de email")
        .required("Este campo es obligatorio"),
    }),
  });

  return (
    <Checkout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default CheckoutContainer;

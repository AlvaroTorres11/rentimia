import { InputField } from "../../../../common/FormComponents";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function SignUpLocation({ onNext, saveDataInLocalStorage }) {
  const [isSubmitting, setSubmitting] = useState(false);

  return (
    <Formik
      initialValues={{
        cp: "",
        estado: "",
        municipio: "",
        colonia: "",
        calle: "",
        num_ext: "",
        num_int: "",
      }}
      validationSchema={Yup.object({
        cp: Yup.string()
          .min(5, "El Código Postal debe tener al menos 5 caracteres")
          .max(5, "El Código Postal no puede tener más de 5 caracteres")
          .required("Debes ingresar un Código Postal"),
        calle: Yup.string().required("Debes ingresar una contraseña"),
        num_ext: Yup.number()
          .min(1, "El número exterior debe ser mayor a 0")
          .required("Debes ingresar un número exterior"),
      })}
      onSubmit={(values) => {
        try {
          setSubmitting(true);
          const dataForSave = {
            cp: values.cp,
            estado: values.estado,
            municipio: values.municipio,
            colonia: values.colonia,
            calle: values.calle,
            num_ext: values.num_ext,
            num_int: values.num_int,
          };

          saveDataInLocalStorage({
            key: "location-data",
            data: dataForSave,
            expirationMinutes: 40,
          });
          onNext(3);
        } catch (error) {
          console.log("Error al guardar los datos en el local storage", error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <Form className="flex flex-col gap-3">
        <InputField
          label="Código postal"
          name="cp"
          type="text"
          placeholder="62531"
        />

        <InputField
          label="Estado"
          name="estado"
          type="text"
          placeholder=""
          readOnly
          disabled
        />
        <InputField
          label="Municipio / Alcaldía"
          name="municipio"
          type="text"
          placeholder=""
          readOnly
          disabled
        />
        <InputField
          label="Colonia"
          name="colonia"
          type="text"
          placeholder=""
          readOnly
          disabled
        />

        <InputField
          label="Calle"
          name="calle"
          type="text"
          placeholder="Calle 25 de abril"
        />

        <InputField
          label="Núm. Exterior"
          name="num_ext"
          type="text"
          placeholder="1"
        />
        <InputField
          label="Num. Interior (opcional)"
          name="num_int"
          type="text"
          placeholder="S/N"
        />

        <button
          className="btn primary-color-300 w-full font-principal-semibold secondary-text-color"
          type="submit"
        >
          {isSubmitting && <span className="loading loading-spinner"></span>}
          Continuar
        </button>
      </Form>
    </Formik>
  );
}

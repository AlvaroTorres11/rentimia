import { useState } from "react";
import { InputField } from "../../../../common/FormComponents";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AvatarUploader from "../../../../common/AvatarUploader";

export default function SignUpPersonalInformation({
  onNext,
  saveDataInLocalStorage,
}) {
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);

  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 90);

  const [userAvatar, setUserAvatar] = useState(null);

  const [isSubmitting, setSubmitting] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          apellidos: "",
          fecha_nac: "",
        }}
        validationSchema={Yup.object({
          nombre: Yup.string()
            .required("Ingresa tu nombre")
            .min(1, "El nombre debe contener al menos una letra")
            .max(37, "El nombre no debe contener más de 37 letras"),
          apellidos: Yup.string()
            .required("Ingresa tus apellidos")
            .min(1, "Los apellidos deben contener al menos una letra")
            .max(100, "Los apellidos no deben contener más de 100 letras"),
          fecha_nac: Yup.date()
            .required("Ingresa tu fecha de nacimiento")
            .min(minDate, "Fecha de nacimiento no válida")
            .max(maxDate, "Fecha de nacimiento no válida"),
        })}
        onSubmit={(values) => {
          try {
            setSubmitting(true);
            const dataForSave = {
              nombre: values.nombre,
              apellidos: values.apellidos,
              fecha_nac: values.fecha_nac,
              avatar_url: "Prueba",
            };

            saveDataInLocalStorage({
              key: "personal-data",
              data: dataForSave,
              expirationMinutes: 40,
            });
            onNext(2);
          } catch (error) {
            console.log(
              "Error al guardar los datos en el local storage",
              error
            );
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <Form className="flex flex-col gap-3">
          <InputField
            label="Nombre(s)"
            name="nombre"
            type="text"
            placeholder="Rigoberto"
          />

          <InputField
            label="Apellidos"
            name="apellidos"
            type="text"
            placeholder="Espíndola Medina"
          />
          <InputField
            label="Fecha de nacimiento"
            name="fecha_nac"
            type="date"
            placeholder="dd/mm/aaaa"
          />

          <div className="text-start flex flex-col gap-0.5">
            <label className="text-sm font-principal-medium quaternaryColor">
              Foto de perfil
            </label>
            <AvatarUploader
              userAvatar={userAvatar}
              setUserAvatar={setUserAvatar}
            ></AvatarUploader>
          </div>

          <button
            className="btn primary-color-300 w-full font-principal-semibold secondary-text-color"
            type="submit"
          >
            {isSubmitting && <span className="loading loading-spinner"></span>}
            Continuar
          </button>
        </Form>
      </Formik>
    </>
  );
}

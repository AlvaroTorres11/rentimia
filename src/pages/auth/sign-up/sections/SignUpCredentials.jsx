import { useState, useEffect } from "react";
import GOOGLE_ICON from "../../../../assets/icons/google.png";
import { InputField } from "../../../../common/FormComponents";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "ldrs/ring";

export default function SignUpCredentials({
  onNext,
  saveDataInLocalStorage,
  getDataFromLocalStorage,
}) {
  const [isSubmitting, setSubmitting] = useState(false);
  const [authDataLoaded, setAuthDataLoaded] = useState(false);
  const [authData, setAuthData] = useState({});

  useEffect(() => {
    const authDataLocalStorage = getDataFromLocalStorage("auth-data");
    if (authDataLocalStorage) {
      console.log(authDataLocalStorage);
      setAuthData(authDataLocalStorage);
    }
    setAuthDataLoaded(true);
  }, [getDataFromLocalStorage]);

  return (
    <>
      <div>
        <button className="btn w-full font-principal-semibold secondary-text-color">
          <img src={GOOGLE_ICON} alt="Google icon" />
          Continuar con Google
        </button>
      </div>

      {authDataLoaded && (
        <Formik
          initialValues={{
            email: authData.email || "",
            password: authData.password || "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .min(5, "La dirección de correo debe tener al menos 5 caracteres")
              .email("Direccion de correo no válida")
              .required("Debes ingresar un correo electrónico"),
            password: Yup.string()
              .min(8, "La contraseña debe tener como mínimo 8 caracteres")
              .max(40, "La contraseña no puede tener más de 40 caracteres")
              .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                "Se sugiere el uso de mayúsculas, minúsculas y números"
              )
              .required("Debes ingresar una contraseña"),
          })}
          onSubmit={(values) => {
            try {
              setSubmitting(true);
              const dataForSave = {
                email: values.email,
                password: values.password,
              };
              saveDataInLocalStorage({
                key: "auth-data",
                data: dataForSave,
                expirationMinutes: 40,
              });
              onNext(1);
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
              label="Correo electrónico"
              name="email"
              type="email"
              placeholder="Ej. efrain@gmail.com"
            />

            <InputField
              label="Contraseña"
              name="password"
              type="password"
              placeholder="**********"
            />

            <div className="flex flex-col gap-5">
              <button
                className="btn primary-color-300 w-full font-principal-semibold secondary-text-color"
                type="submit"
              >
                {isSubmitting && (
                  <span className="loading loading-spinner"></span>
                )}
                Continuar
              </button>

              <p className="font-principal-light">
                ¿Ya tienes una cuenta?{" "}
                <Link>
                  <u>
                    <span className="font-principal-semibold">
                      Inicia sesión aquí
                    </span>
                  </u>
                </Link>
              </p>
            </div>
          </Form>
        </Formik>
      )}
    </>
  );
}

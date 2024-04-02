import GOOGLE_ICON from "../../../assets/icons/google.png";
import { InputField } from "../../../common/FormComponents";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import HERO from "../../../assets/auth/Signin.jpg";
import { useState } from "react";
import { useThemeToogle } from "../../../hooks/useThemeToogle";

export function SignUpStart({ onNext }) {
  return (
    <>
      <div>
        <button className="btn w-full font-principal-semibold secondary-text-color">
          <img src={GOOGLE_ICON} alt="Google icon" />
          Continuar con Google
        </button>
      </div>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .min(5, "La dirección de correo debe tener al menos 5 caracteres")
            .email("Direccion de correo no válida")
            .required("Debes ingresar un correo electrónico"),
          password: Yup.string()
            .min(8, "La contraseña debe tener como mínimo 8 caracteres")
            .max(40, "La contraseña no puede tener más de 40 caracteres")
            .required("Debes ingresar una contraseña"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onNext(1);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="flex flex-col gap-3">
          <InputField
            label="Correo electrónico"
            name="email"
            type="text"
            placeholder="Ej. efrain@gmail.com"
          />

          <InputField
            label="Contraseña"
            name="password"
            type="password"
            placeholder="**********"
          />

          <div className="flex flex-col gap-5">
            <button className="btn primary-color-300 w-full" type="submit">
              <span className="font-principal-semibold secondary-text-color">
                Continuar
              </span>
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
    </>
  );
}

export function SignUpPersonalInformation({ onNext }) {
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);

  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 90);
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          apellidoPaterno: "",
          apellidoMaterno: "",
          fechaNac: "",
        }}
        validationSchema={Yup.object({
          nombre: Yup.string()
            .required("Ingresa tu nombre")
            .min(1, "El nombre debe contener al menos una letra")
            .max(37, "El nombre no debe contener más de 37 letras"),
          apellidoPaterno: Yup.string()
            .required("Ingresa tu apellido paterno")
            .min(1, "El apellido debe contener al menos una letra")
            .max(50, "El apellido no debe contener más de 50 letras"),
          apellidoMaterno: Yup.string()
            .min(1, "El apellido debe contener al menos una letra")
            .max(50, "El apellido no debe contener más de 50 letras"),
          fechaNac: Yup.date()
            .required("Ingresa tu fecha de nacimiento")
            .min(minDate, "Fecha de nacimiento no válida")
            .max(maxDate, "Fecha de nacimiento no válida"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onNext(2);
            setSubmitting(false);
          }, 400);
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
            label="Apellido Paterno"
            name="apellidoPaterno"
            type="text"
            placeholder="Espíndola"
          />
          <InputField
            label="Apellido Materno"
            name="apellidoMaterno"
            type="text"
            placeholder="Medina"
          />
          <InputField
            label="Fecha de nacimiento"
            name="fechaNac"
            type="date"
            placeholder="dd/mm/aaaa"
          />

          <button className="btn primary-color-300 w-full" type="submit">
            <span className="font-principal-semibold secondary-text-color">
              Continuar
            </span>
          </button>
        </Form>
      </Formik>
    </>
  );
}

export function SignUpLocation() {
  return (
    <Formik
      initialValues={{
        cp: "",
        estado: "",
        municipio: "",
        colonia: "",
        calle: "",
        numExt: "",
        numInt: "",
      }}
      validationSchema={Yup.object({
        cp: Yup.string()
          .min(5, "El Código Postal debe tener al menos 5 caracteres")
          .max(5, "El Código Postal no puede tener más de 5 caracteres")
          .required("Debes ingresar un Código Postal"),
        calle: Yup.string().required("Debes ingresar una contraseña"),
        numExt: Yup.number()
          .min(1, "El número exterior debe ser mayor a 0")
          .required("Debes ingresar un número exterior"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          onNext(2);
          setSubmitting(false);
        }, 400);
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

        <div className="flex gap-5">
          <InputField
            label="Núm. Exterior"
            name="numExt"
            type="text"
            placeholder="1"
          />
          <InputField
            label="Num. Interior (opcional)"
            name="numInt"
            type="text"
            placeholder="S/N"
          />
        </div>

        <div className="flex flex-col gap-5">
          <button className="btn primary-color-300 w-full" type="submit">
            <span className="font-principal-semibold secondary-text-color">
              Continuar
            </span>
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default function SignUp() {
  const { handleChangeTheme } = useThemeToogle();
  const signUpSectionTitles = [
    "Empecemos",
    "Información personal",
    "Ubicación",
  ];

  const [signUpSection, setSignUpSection] = useState(0);
  const handleNextSection = (nextSection) => {
    setSignUpSection(nextSection);
  };

  return (
    <section className="min-h-screen flex">
      <article className="w-full p-18 relative grid place-content-center lg:w-3/6 md:p-5 lg:p-10 xl:p-16">
        <h2 className="absolute top-8 md:top-2 lg:top-8 left-10 text-2xl font-principal-semibold primary-text-color">
          Rentimia
        </h2>
        <label className="swap swap-rotate absolute right-10 top-8">
          <input
            type="checkbox"
            className="theme-controller"
            value="winter"
            onClick={handleChangeTheme}
          />

          <svg
            className="swap-off fill-current w-10 h-10 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        <div className="flex flex-col gap-8 min-w-[400px] p-8">
          <div className="text-start flex flex-col">
            <h2 className="text-3xl font-principal-semibold primary-text-color">
              {signUpSectionTitles[signUpSection]}
            </h2>
            <span className="font-principal-medium secondary-text-color">
              Creación de nueva cuenta
            </span>
          </div>

          {signUpSection === 0 && <SignUpStart onNext={handleNextSection} />}
          {signUpSection === 1 && <SignUpPersonalInformation />}
        </div>
      </article>

      <article className="w-4/6 hidden md:block md:relative">
        <span className="font-principal-light m-6 text-slate-200 text-2xl absolute top-20">
          Renta lo que necesites y como lo necesites
        </span>
        <img className="h-full object-cover" src={HERO} alt="" />
      </article>
    </section>
  );
}

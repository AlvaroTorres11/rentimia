import GOOGLE_ICON from "../../../assets/icons/google.png";
import { InputField } from "../../../common/FormComponents";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import HERO from "../../../assets/auth/Signin.jpg";

function SignIn() {
  return (
    <section className="h-screen flex">
      <article className="w-full p-24 relative grid place-content-center md:w-3/6 md:p-5 lg:w-2/6 lg:p-10 xl:p-16">
        <h2 className="absolute top-10 left-10 text-2xl font-bold">Rentimia</h2>
        <div className="flex flex-col gap-8">
          <div className="text-start flex flex-col">
            <h2 className="text-3xl font-semibold">Bienvenido de nuevo</h2>
            <span>Inicia sesión en tu cuenta</span>
          </div>

          <div>
            <button className="btn w-full">
              <img src={GOOGLE_ICON} alt="Google icon" />
              Continuar con Google
            </button>
          </div>

          <form action="" onSubmit="">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .min(
                    5,
                    "La dirección de correo debe tener al menos 5 caracteres"
                  )
                  .email("Direccion de correo no válida")
                  .required("Debes ingresar un correo electrónico"),
                password: Yup.string()
                  .min(20, "La contraseña debe tener como mínimo 8 caracteres")
                  .max(40, "La contraseña no puede tener más de 40 caracteres")
                  .required("Debes ingresar una contraseña"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
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

                <button className="btn primaryColor50" type="submit">
                  Submit
                </button>
              </Form>
            </Formik>
          </form>
        </div>
      </article>

      <article className="w-4/6 hidden md:block">
        <span className="text-slate-200 text-2xl font-light absolute top-20">
          Renta lo que necesites y como lo necesites
        </span>
        <img className="h-full object-cover" src={HERO} alt="" />
      </article>
    </section>
  );
}

export default SignIn;

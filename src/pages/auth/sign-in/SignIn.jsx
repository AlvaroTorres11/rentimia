import GOOGLE_ICON from "../../../assets/icons/google.png";
import { InputField } from "../../../common/FormComponents";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function SignIn() {
  return (
    <section>
      <article>
        <div>
          <h2>Bienvenido de nuevo</h2>
          <span>Inicia sesión en tu cuenta</span>
        </div>

        <div>
          <button className="btn">
            <img src={GOOGLE_ICON} alt="Google icon" />
            Continuar con Google
          </button>
          <hr />
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
                .required("Required"),
              password: Yup.string()
                .min(20, "La contraseña debe tener como mínimo 8 caracteres")
                .max(40, "La contraseña no puede tener más de 40 caracteres")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
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

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </form>
      </article>

      <article>
        <span>Renta lo que necesites y como lo necesites</span>
        <img src="" alt="" />
      </article>
    </section>
  );
}

export default SignIn;

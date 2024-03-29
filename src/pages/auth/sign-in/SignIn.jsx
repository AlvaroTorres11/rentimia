import GOOGLE_ICON from "../../../assets/icons/google.png";

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

        <form action="" onSubmit=""></form>
      </article>

      <article>
        <span>Renta lo que necesites y como lo necesites</span>
        <img src="" alt="" />
      </article>
    </section>
  );
}

export default SignIn;

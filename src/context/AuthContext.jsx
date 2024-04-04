import { createContext, useContext, useState } from "react";
import { useSupabase } from "../supabase/SupabaseContext";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState([]);
  const supabase = useSupabase();

  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) throw new Error("Error al iniciar sesión con Google");

      setSession(data);
    } catch (error) {
      return error.message;
    }
  }

  async function signInWithEmailAndPassword({ emailParams, passwordParams }) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailParams,
        password: passwordParams,
      });

      if (error)
        throw new Error("Error al iniciar sesión con correo y contraseña");

      setSession(data);
    } catch (error) {
      return error.message;
    }
  }

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw new Error("Error al cerrar sesión");
    } catch (error) {
      return error.message;
    }
  }

  return (
    <AuthContext.Provider
      value={{ session, signInWithGoogle, signInWithEmailAndPassword, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

import { createContext, useContext } from "react";
import { createClient } from "@supabase/supabase-js";

const SupabaseContext = createContext(null);
let supabaseClient;

export const useSupabase = () => {
  return useContext(SupabaseContext);
};

export const SupabaseProvider = ({ children }) => {
  //* Si la instancia del cliente de Supabase aún no ha sido creada, crea una nueva instancia
  if (!supabaseClient) {
    supabaseClient = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_KEY
    );
  }

  return (
    <SupabaseContext.Provider value={supabaseClient}>
      {children}
    </SupabaseContext.Provider>
  );
};

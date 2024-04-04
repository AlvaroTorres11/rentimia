import RoutesManagement from "./RoutesManagement";
import { SupabaseProvider } from "./supabase/SupabaseContext";

function App() {
  return (
    <SupabaseProvider>
      <RoutesManagement />
    </SupabaseProvider>
  );
}

export default App;

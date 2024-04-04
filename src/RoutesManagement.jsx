import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/sign-in/SignIn";
import SignUp from "./pages/auth/sign-up/SignUp";

function RoutesManagement() {
  return (
    <Routes>
      <Route path="/" Component={SignIn} />
      <Route path="/iniciar_sesion" Component={SignIn} />
      <Route path="/registro" Component={SignUp} />
    </Routes>
  );
}

export default RoutesManagement;

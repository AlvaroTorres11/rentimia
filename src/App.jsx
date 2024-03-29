import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/sign-in/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" Component={SignIn} />
      <Route path="/sign_in" Component={SignIn} />
      <Route path="/about" />
      <Route path="/dashboard" />
    </Routes>
  );
}

export default App;

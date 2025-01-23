import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import CaptainHome from "./pages/CaptainHome";
import Home from "./pages/Home";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route
          path="/captain-login"
          element={
            // <CaptainProtectedWrapper>
              <CaptainLogin />
            // </CaptainProtectedWrapper>
          }
        />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            // <UserProtectedWrapper>
              <Home />
            // </UserProtectedWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            // <CaptainProtectedWrapper>
              <CaptainHome />
            // </CaptainProtectedWrapper>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;

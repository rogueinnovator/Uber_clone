import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
import CaptainHome from "./pages/CaptainHome";
import Home from "./pages/Home";
import Riding from "./pages/Riding";
import CaptainProtectesdWrapper from "./pages/CaptainProtectedWrapper";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import CaptainRiding from "./pages/CaptainRiding";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/riding" element={<Riding />} />
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
        <Route path="/captain-riding" element={<CaptainRiding />}></Route>
      </Routes>
    </div>
  );
};

export default App;

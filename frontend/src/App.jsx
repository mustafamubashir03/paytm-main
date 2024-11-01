import "./index.css";

import Dashboard from "../pages/Dashboard";
import Send from "../pages/Send";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import useVerify from "../hooks/useVerifyHook";

function App() {

    const {userVerify} = useVerify();
  return (
    <div className="bg-slate-800 w-screen min-h-screen ">
      <BrowserRouter>

          <Routes>
            <Route
              path={"/sign-up"}
              element={userVerify ? <Dashboard /> : <SignUp />}
            />
            <Route
              path="/sign-in"
              element={userVerify ? <Dashboard /> : <SignIn />}
            />
            <Route
              path={"/"}
              element={userVerify ? <Dashboard /> : <SignIn />}
            />
            <Route path="/send" element={userVerify ? <Send /> : <SignIn />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

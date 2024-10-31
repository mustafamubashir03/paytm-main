import "./index.css";

import Dashboard from "../pages/Dashboard";
import Send from "../pages/Send";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import { useContext, useEffect } from "react";
import axios from "axios";
import  { verifyContext } from "../context/VerifyContext";

function App() {
  const { userVerify, setUserVerify } = useContext(verifyContext);

  useEffect(() => {
    async function verification() {
      const response = await axios.get(
        "http://localhost:3000/api/v1/user/verify",
        {
          headers: {
            authorization: localStorage.getItem("authorization"),
          },
        }
      );
      setUserVerify(response.data.status);
    }
    verification();
  }, [userVerify]);

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

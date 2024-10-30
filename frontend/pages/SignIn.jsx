import { useContext, useState } from "react";
import Body from "../components/Body";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import LinkButton from "../components/LinkButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { verifyContext } from "../context/VerifyContext";
export default function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {userVerify,setUserVerify} = useContext(verifyContext)
  async function handleSubmit() {
    const response = await axios
      .post("http://localhost:3000/api/v1/user/signin", { username, password })
      .catch((error) => console.log(error));
    localStorage.setItem("authorization", "Bearer " + response.data.token);
    setUserVerify(true);
    console.log("SIgn in "+userVerify);
    navigate("/");
  }
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className=" bg-slate-100 flex flex-col  items-start rounded  max-w-md  px-6">
        <Heading text={"Sign in"} />
        <Body text={"Enter your information to create an account"} />
        <InputBox
          setter={(e) => setUsername(e.target.value)}
          label={"Email"}
          placeholder={"John@gmail.com"}
          type={"email"}
        />
        <InputBox
          setter={(e) => setPassword(e.target.value)}
          label={"Password"}
          placeholder={"*****"}
          type={"text"}
        />
        <Button clickEvent={handleSubmit} label={"Sign in"} />
        <div className="flex mb-4 gap-1 w-full justify-center items-center ">
          <span>Don't have an account?</span>
          <Link to="/sign-up">
            <LinkButton text={"Sign up"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

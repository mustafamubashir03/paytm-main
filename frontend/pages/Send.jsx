import { useLocation, useNavigate } from "react-router-dom";
import ButtonSecondary from "../components/ButtonSecondary";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import { useState } from "react";
import axios from "axios";

export default function Send() {
  const [error, setError] = useState("");
  const { search } = useLocation();
  const navigate = useNavigate();
  const [amount, setAmount] = useState();
  const searchParams = new URLSearchParams(search);
  const to = searchParams.get("to");
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");

  async function paymentTransfer() {
    try {
      setError("");
      if (amount <= 0) {
        return;
      }
      await axios.post(
        `http://localhost:3000/api/v1/account/transfer?to=${to}&amount=${amount}`,
        {},
        {
          headers: {
            authorization: localStorage.getItem("authorization"),
          },
        }
      );
      navigate("/");
    } catch (error) {
      setError("Transaction has been failed");
    }
  }
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className=" bg-slate-100 flex flex-col  items-start rounded  max-w-md  px-6">
        <Heading text={"Send money"} />
        <div className=" flex  gap-2 mb-4 mt-4">
          <div className="rounded-full h-8 w-8 bg-green-700 flex items-center justify-center text-slate-100">
            <p>{firstName[0]}</p>
          </div>
          <p className="self-center font-semibold text-lg">
            {firstName + " " + lastName}
          </p>
        </div>
        <InputBox
          label={"Amount (in dollars $)"}
          type={"text"}
          setter={(e) => setAmount(e.target.value)}
        />
        <ButtonSecondary
          label={"Initiate transfer"}
          onClick={paymentTransfer}
        />
        <span className="text-red-700">{error}</span>
      </div>
    </div>
  );
}

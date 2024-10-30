import { useEffect, useState } from "react";
import PaymentSection from "../components/PaymentSection";
import TopBar from "../components/TopBar";
import axios from "axios";

export default function Dashboard() {
  const [userBalance, setUserBalance] = useState("");
  useEffect(() => {
    async function balanceFetcher() {
      const response = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: {
            authorization: localStorage.getItem("authorization"),
          },
        }
      );
      setUserBalance(response.data.balance);
    }
    balanceFetcher();
  }, []);

  return (
    <div className="bg-slate-800  ">
      <TopBar HeadingText={"PaymentApp"} SecondaryText={"Hello"} ButtonText={"Log out"} />
      <div className="py-4 px-4 mb-4 bg-slate-100 text-slate-700 flex text-lg  items-center max-w-screen-md mx-auto rounded-md">
        <p>
          Your balance is
          <span className="text-xl font-bold text-slate-800">
            {" "}
            ${userBalance}
          </span>
        </p>
      </div>
      <PaymentSection />
    </div>
  );
}

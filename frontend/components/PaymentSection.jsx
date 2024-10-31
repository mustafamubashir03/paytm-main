import { useEffect, useState } from "react";
import Heading from "./Heading";
import UserTab from "./UserTab";
import axios from "axios";
import Body from "./Body";


export default function PaymentSection() {
  const [userData, setUserData] = useState([]);
  const [filter, setFilter] = useState("");


  useEffect(() => {
    async function dataFetch() {
      const response = await axios.get(
        `http://localhost:3000/api/v1/user/bulk?filter=` + filter,
        {
          headers: {
            authorization: localStorage.getItem("authorization"),
          },
        }
      );
      setUserData(response.data.user);
    }
    dataFetch();
  }, [filter]);

  return (
    <div className="py-4 px-4 bg-slate-100 text-slate-700 text-lg   max-w-screen-md mx-auto rounded-md">
      <Heading text={"Users"} />
      <input
        onChange={(e) => setFilter(e.target.value)}
        className="inline-block w-full bg-slate-100 border-2 border-slate-300 rounded-sm py-0.5 px-2 italic"
        type="text"
        placeholder="Search users..."
      />
      {userData.length === 0 ? (
        <Body text={"No such user"} />
      ) : (
        userData.map((user) => (
          <UserTab
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            letter={user.firstName[0]}
            id={user.id}
          />
        ))
      )}
    </div>
  );
}

import { verifyContext } from "../context/VerifyContext";
import { useContext, useEffect } from "react";
import axios from "axios";
export default function useVerify() {
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
  return { userVerify, setUserVerify };
}

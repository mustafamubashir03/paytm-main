import { useContext, useEffect, useState } from "react";
import ProfileIcon from "./ProfileIcon";
import axios from "axios";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { verifyContext } from "../context/VerifyContext";

export default function TopBar({ HeadingText, SecondaryText, ButtonText }) {
  const navigate = useNavigate();
  const {setUserVerify} = useContext(verifyContext)
  const [profileIcon, setProfileIcon] = useState("");
  useEffect(() => {
    async function userProfileFetcher() {
      const response = await axios.get("http://localhost:3000/api/v1/user/me", {
        headers: {
          authorization: localStorage.getItem("authorization"),
        },
      });
      setProfileIcon(response.data.firstName[0]);
    }
    userProfileFetcher();
  }, []);

  function logOut() {
    setUserVerify(false);
    localStorage.removeItem("authorization");
    navigate("/sign-in")
  }

  return (
    <div className="bg-slate-300   mb-4 px-4 pt-4 w-screen ">
      <div className="flex justify-between items-center max-w-screen-md mx-auto">
        <h1 className="text-xl font-semibold mb-4 mt-4">{HeadingText}</h1>
        <div className="flex gap-2 items-center">
          {ButtonText && <Button label={ButtonText} clickEvent={logOut} />}
          <p>{SecondaryText}</p>
          <ProfileIcon letter={profileIcon} />
        </div>
      </div>
    </div>
  );
}


import { useEffect, useState } from "react";
import ProfileIcon from "./ProfileIcon";
import axios from "axios";

export default function TopBar({HeadingText,SecondaryText}){

    const [profileIcon,setProfileIcon] = useState("")
    useEffect(()=>{
        async function userProfileFetcher(){
            const response = await axios.get("http://localhost:3000/api/v1/user/me",{
                headers:{
                    authorization:localStorage.getItem("authorization")
                }
            })
            setProfileIcon(response.data.firstName[0])
        }
        userProfileFetcher()
    },[])

    return (<div className="bg-slate-300   mb-4 px-4 pt-4 w-screen ">
        <div className="flex justify-between items-center max-w-screen-md mx-auto">
        <h1 className="text-xl font-semibold mb-4 mt-4">{HeadingText}</h1>
        <div className="flex gap-2 items-center">
            <p>{SecondaryText}</p>
            <ProfileIcon letter={profileIcon}/>
        </div></div></div>)
}
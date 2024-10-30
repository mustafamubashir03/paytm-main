import React from 'react'

export default function Logout({onClick}) {
  return (
    <button onClick={onClick} className=" py-2 px-4  text-sm mt-4 mb-4  bg-red-500 text-slate-50 font-normal rounded-md hover:bg-red-600 transition-all">Logout</button>
  )
}

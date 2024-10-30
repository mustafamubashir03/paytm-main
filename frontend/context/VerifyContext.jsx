import { createContext, useState } from "react";

import React from "react";

export const verifyContext = createContext({
  userVerify: false,
  setUserVerify: () => {},
});
export default function VerifyContext({ children }) {
  const [userVerify, setUserVerify] = useState(false);

  return (
    <verifyContext.Provider value={{ userVerify, setUserVerify }}>
      {children}
    </verifyContext.Provider>
  );
}

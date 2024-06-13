import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName }}>
      {children}
    </LoginContext.Provider>
  );
};

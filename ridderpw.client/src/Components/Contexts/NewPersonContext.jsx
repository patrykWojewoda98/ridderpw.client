import React, { createContext, useState } from "react";

export const NewPersonContext = createContext();

export const NewPersonProvider = ({ children }) => {
  const [newPerson, setNewPerson] = useState(null);

  return (
    <NewPersonContext.Provider value={{ newPerson, setNewPerson }}>
      {children}
    </NewPersonContext.Provider>
  );
};

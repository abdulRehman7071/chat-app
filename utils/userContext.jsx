import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [id, setId] = useState(null);
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, id, setId }}>
      {" "}
      {children}{" "}
    </UserContext.Provider>
  );
}

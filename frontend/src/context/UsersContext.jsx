import { createContext, useState } from "react";


const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      name: "Jelena",
      age: 26
    },
    {
      name: "Milan",
      age: 19
    },
    {
      name: "Nikola",
      age: 29
    }
  ]);
  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  )
};


export default UserContext;
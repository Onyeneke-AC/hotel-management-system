import { createContext, useContext, useState } from "react";

const UserDetailsContext = createContext();

function UserDetailsProvider({ children }) {
  const storedUserDetails =
    JSON.parse(window.localStorage.getItem("userDetails")) || {};

  const [userDetails, setUserDetails] = useState(storedUserDetails);

  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailsContext.Provider>
  );
}

function useUserDetails() {
  const context = useContext(UserDetailsContext);

  if (context === "undefined")
    throw new Error(
      "UserDetailsContext was used outside of UserDetailsProvider"
    );

  return context;
}

export { UserDetailsProvider, useUserDetails };

import React, { createContext, useContext, useState } from "react";

// Create context
const UserContext = createContext();

// Provider
function UserProvider(props) {
  const [userId, setUserId] = useState(process.env.REACT_APP_USER_ID);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {props.children}
    </UserContext.Provider>
  );
}

// Custom context
function useUserContext() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserContext");
  }

  return context;
}

export { UserProvider, useUserContext };

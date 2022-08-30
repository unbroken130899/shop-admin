import { createContext, useState } from "react";

export const AuthContext = createContext();
export function AuthProvider(props) {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("userData"));
  
  return (
    <div>
      <AuthContext.Provider value={{ isLogged, setIsLogged }}>
        {props.children}
      </AuthContext.Provider>
    </div>
  );
}

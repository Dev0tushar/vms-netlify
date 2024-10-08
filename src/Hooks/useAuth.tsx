

import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

// Define a User type
type User = {
  name: string;
  // email: string;
  // image?: string;
};

const AuthContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  user: User | null; 
  setUser: (user: User | null) => void;
}>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
});


export const useAuth = () => useContext(AuthContext);


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/access/login", {
        email,
        // password,
      });

      if (response.data.success) {
        const userData = response.data.user;
        setUser({
          name: userData.name,
          // email: userData.email,
          // image: userData.image,
        });
        setIsAuthenticated(true);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

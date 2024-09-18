import React, { createContext, useContext, useState } from "react";

// Define the shape of your context state
interface AuthContextType {
  isAuthenticated: boolean;
  registerUser: (email: string, password: string) => void;
  loginUser: (email: string, password: string) => boolean;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Function to register a new user
  const registerUser = (email: string, password: string) => {
    const registeredUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );
    const userExists = registeredUsers.some(
      (user: any) => user.email === email
    );

    if (!userExists) {
      const newUser = { email, password };
      registeredUsers.push(newUser);
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
      localStorage.setItem("isSignedUp", "true");
    }
  };

  // Function to login user
  const loginUser = (email: string, password: string): boolean => {
    const registeredUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );
    const userExists = registeredUsers.some(
      (user: any) => user.email === email && user.password === password
    );

    if (userExists) {
      setIsAuthenticated(true);
      return true;
    } else {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, registerUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

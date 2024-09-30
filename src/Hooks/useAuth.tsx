// import { useState, useEffect, useContext, createContext } from "react";
// import axios from "axios";

// // Define a User type
// type User = {
//   name: string;
//   // email: string;
//   // image?: string;
// };

// const AuthContext = createContext<{
//   isAuthenticated: boolean;
//   setIsAuthenticated: (isAuthenticated: boolean) => void;
//   user: User | null;
//   setUser: (user: User | null) => void;
// }>({
//   isAuthenticated: false,
//   setIsAuthenticated: () => {},
//   user: null,
//   setUser: () => {},
// });

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState<User | null>(null);

//   const login = async (email: string, password: string) => {
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     try {
//       const response = await axios.post(`${API_BASE_URL}/access/login`, {
//         email,
//         // password,
//       });

//       if (response.data.success) {
//         const userData = response.data.user;
//         setUser({
//           name: userData.name,
//           // email: userData.email,
//           // image: userData.image,
//         });
//         setIsAuthenticated(true);
//       } else {
//         throw new Error("Login failed");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setIsAuthenticated(false);
//     }
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated,
//         setIsAuthenticated,
//         user,
//         setUser,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };




// import { useState, useContext, createContext } from "react";
// import axios from "axios";

// // Define a User type
// type User = {
//   name: string;
//   // email: string;
//   // image?: string;
// };

// const AuthContext = createContext<{
//   isAuthenticated: boolean;
//   setIsAuthenticated: (isAuthenticated: boolean) => void;
//   user: User | null;
//   setUser: (user: User | null) => void;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// }>({
//   isAuthenticated: true,
//   setIsAuthenticated: () => {},
//   user: null,
//   setUser: () => {},
//   login: async () => {},
//   logout: () => {},
// });

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState<User | null>(null);

//   const login = async (email: string, password: string) => {
//     const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//     try {
//       const response = await axios.post(`${API_BASE_URL}/access/users`, {
//         email,
//         //  password,
//       });
//       console.log("API Response:", response.data);
//       if (response.data.success) {
//         const userData = response.data.user;
//         setUser({
//           name: userData.name,
//           // email: userData.email,
//           // image: userData.image,
//         });
//         setIsAuthenticated(true);
//         console.log("poke", isAuthenticated);
//         console.log("User authenticated:", userData);
//       } else {
//         throw new Error("Login failed");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setIsAuthenticated(false);
//     }
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated,
//         setIsAuthenticated,
//         user,
//         setUser,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };




import { useState, useContext, createContext } from "react";
import axios from "axios";

type User = {
  name: string;
};

const AuthContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string) => Promise<void>;
  logout: () => void;
}>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
  login: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    try {
      const response = await axios.post(`${API_BASE_URL}/access/users`, {
        email,
        // password,
      });

      if (response.data.success) {
        
        const token = response.data.token;
        localStorage.setItem("accessToken", token);
        const userData = response.data.user;
        setUser({ name: userData.name });
        setIsAuthenticated(true);
        console.log("accessTOken", userData);
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
    localStorage.removeItem("accessToken");
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

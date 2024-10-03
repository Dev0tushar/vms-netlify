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






import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";


type User = {
  name: string;

};

const AuthContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuthToken: () => void;
}>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
  login: async () => {},
  logout: () => {},
  checkAuthToken: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('token');

  const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false);
  const [user, setUser] = useState<User | null>(null);
  
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const expiration = localStorage.getItem("token_expiration");
  //     if (expiration && new Date().getTime() < parseInt(expiration)) {
  //       setIsAuthenticated(true);
       
  //     } else {
        
  //       logout();
  //     }
  //   }
  // }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/access/users`, { email });
      if (response.data.token) {
        const { token, user, expiresIn } = response.data;
        setUser(user);
        setIsAuthenticated(true);
        // localStorage.setItem("token", token);
        // localStorage.setItem("token_expiration", (new Date().getTime() + expiresIn).toString());
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("token_expiration");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

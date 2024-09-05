
// // import  { createContext, useState, useContext, ReactNode } from 'react';

// // interface AuthContextType {
// //   user: any;
// //   login: (userData: any) => void;
// //   logout: () => void;
// // }

// // const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // export const AuthProvider = ({ children }: { children: ReactNode }) => {
// //   const [user, setUser] = useState<any>(null);

// //   const login = (userData: any) => {
// //     setUser(userData);
// //   };

// //   const logout = () => {
// //     setUser(null);
// //   };

// //   return (
// //     <AuthContext.Provider value={{ user, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => {
// //   const context = useContext(AuthContext);
// //   if (!context) {
// //     throw new Error("useAuth must be used within an AuthProvider");
// //   }
// //   return context;
// // };



// // import axiosInstance from '../api/DataApi';

// // // Function to sign up a new user
// // export const signUpUser = async (data: any) => {
// //     try {
// //         const response = await axiosInstance.post('/users', data);
// //         return response.data;
// //     } catch (error) {
// //         console.error('Signup error:', error);
// //         throw error;
// //     }
// // };

// // // Function to log in an existing user
// // export const loginUser = async (data: any) => {
// //     try {
// //         const response = await axiosInstance.post('/token/', data);
// //         const token = response.data.access;
// //         localStorage.setItem('token', token); // Store token in localStorage
// //         return response.data;
// //     } catch (error) {
// //         console.error('Login error:', error);
// //         throw error;
// //     }
// // };

// // // Function to get user data (for demonstration)
// // export const getUserData = async () => {
// //     try {
// //         const response = await axiosInstance.get('/users');
// //         return response.data;
// //     } catch (error) {
// //         console.error('Get user data error:', error);
// //         throw error;
// //     }
// // };

// import { createContext, useState,  ReactNode } from "react";

// interface AuthContextType {
//   user: any;
//   login: (userData: any) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<any>(null);

//   const login = (userData: any) => {
//     setUser(userData);
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



// src/context/AuthContext.tsx
import React, { createContext, useContext, useState } from "react";

// Define the shape of your context state
interface AuthContextType {
  isAuthenticated: boolean;
  registerUser: (email: string, password: string) => void;
  loginUser: (email: string, password: string) => boolean;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Function to register a new user
  const registerUser = (email: string, password: string) => {
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const userExists = registeredUsers.some((user: any) => user.email === email);

    if (!userExists) {
      const newUser = { email, password };
      registeredUsers.push(newUser);
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
      localStorage.setItem("isSignedUp", "true");
    }
  };

  // Function to login user
  const loginUser = (email: string, password: string): boolean => {
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
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

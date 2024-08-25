
// import  { createContext, useState, useContext, ReactNode } from 'react';

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

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };



import axiosInstance from '../api/DataApi';

// Function to sign up a new user
export const signUpUser = async (data: any) => {
    try {
        const response = await axiosInstance.post('/users', data);
        return response.data;
    } catch (error) {
        console.error('Signup error:', error);
        throw error;
    }
};

// Function to log in an existing user
export const loginUser = async (data: any) => {
    try {
        const response = await axiosInstance.post('/token/', data);
        const token = response.data.access;
        localStorage.setItem('token', token); // Store token in localStorage
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

// Function to get user data (for demonstration)
export const getUserData = async () => {
    try {
        const response = await axiosInstance.get('/users');
        return response.data;
    } catch (error) {
        console.error('Get user data error:', error);
        throw error;
    }
};

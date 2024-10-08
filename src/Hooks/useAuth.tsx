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

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false);
  const [user, setUser] = useState<User | null>(
    storedUser ? JSON.parse(storedUser) : null
  );

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
      const response = await axios.get(`${API_BASE_URL}/access/users`, {
        email,
      });

      if (response.data.token) {
        const { token, user, expiresIn } = response.data;
        setUser(user);

        setIsAuthenticated(true);

        localStorage.setItem("token", token);
        localStorage.setItem(
          "token_expiration",
          (new Date().getTime() + expiresIn).toString()
        );
        localStorage.setItem("user", JSON.stringify(user));
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
    localStorage.removeItem("user");
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

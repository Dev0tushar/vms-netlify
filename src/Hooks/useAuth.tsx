import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

type User = {
  name: string;
  usename: string;
  email: string;
  phonenumber: string;
};

const AuthContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuthToken: () => void;
  onlineDeviceCount: number;
  totalDeviceCount: number;
  setOnlineDeviceCount: (count: number) => void;
  setTotalDeviceCount: (count: number) => void;
}>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
  login: async () => {},
  logout: () => {},
  checkAuthToken: () => {},
  onlineDeviceCount: 0,
  totalDeviceCount: 0,
  setOnlineDeviceCount: () => {},
  setTotalDeviceCount: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const token = sessionStorage.getItem("token");
  const storedUser = sessionStorage.getItem("user");

  const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false);
  const [user, setUser] = useState<User | null>(
    storedUser ? JSON.parse(storedUser) : null
  );

  const [onlineDeviceCount, setOnlineDeviceCount] = useState(() => {
    const storedCount = sessionStorage.getItem("onlineDeviceCount");
    return storedCount ? Number(storedCount) : 0;
  });
  const [totalDeviceCount, setTotalDeviceCount] = useState(() => {
    const storedCount = sessionStorage.getItem("totalDeviceCount");
    return storedCount ? Number(storedCount) : 0;
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  {
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
  }
  useEffect(() => {
    const storedOnlineCount = sessionStorage.getItem("onlineDeviceCount");
    const storedTotalCount = sessionStorage.getItem("totalDeviceCount");

    if (storedOnlineCount) {
      setOnlineDeviceCount(Number(storedOnlineCount));
    }

    if (storedTotalCount) {
      setTotalDeviceCount(Number(storedTotalCount));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("onlineDeviceCount", String(onlineDeviceCount));
  }, [onlineDeviceCount]);

  useEffect(() => {
    sessionStorage.setItem("totalDeviceCount", String(totalDeviceCount))
  }, [totalDeviceCount]);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/access/users`, {
        params: { email },
      });

      if (response.data.token) {
        const { token, user, expiresIn } = response.data;
        setUser(user);

        setIsAuthenticated(true);

        sessionStorage.setItem("token", token);
        sessionStorage.setItem(
          "token_expiration",
          (new Date().getTime() + expiresIn).toString()
        );
        sessionStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("token_expiration");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("onlineDeviceCount");
    sessionStorage.removeItem("totalDeviceCount");
  };

  const checkAuthToken = () => {
    const token = sessionStorage.getItem("token");
    const expiration = sessionStorage.getItem("token_expiration");

    if (!token || (expiration && new Date().getTime() > parseInt(expiration))) {
      logout();
    }
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
        onlineDeviceCount,
        checkAuthToken,
        totalDeviceCount,
        setOnlineDeviceCount,
        setTotalDeviceCount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

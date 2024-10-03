

import { Navigate } from "react-router-dom";
import { useAuth } from "./Hooks/useAuth";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuth();
  
    console.log("PrivateRoute called, isAuthenticated:", isAuthenticated);
  
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  
    return children;
  };

export default PrivateRoute;





// import { Navigate } from 'react-router-dom';
// import { ReactNode } from 'react';

// interface PrivateRouteProps {
//     children: ReactNode;
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
//     const token = localStorage.getItem('token');
//     return token ? <>{children}</> : <Navigate to="/login" />;
// };

// export default PrivateRoute;


// import { Navigate } from "react-router-dom";
// import { ReactNode } from "react";
// import { useAuth } from "./Hooks/useAuth";

// interface PrivateRouteProps {
//   children: ReactNode;
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
//   const { isAuthenticated } = useAuth(); 

//   return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
// };

// export default PrivateRoute;

// import { Navigate } from "react-router-dom";
// import { useAuth } from "./Hooks/useAuth";

// const PrivateRoute = ({ children }: { children: JSX.Element }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;


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




// import React from 'react';
// import { Navigate } from 'react-router-dom';

// interface PrivateRouteProps {
//   children: React.ReactNode;
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
//   const isAuthenticate = !!localStorage.getItem('accessToken');

//   return isAuthenticate ? <>{children}</> : <Navigate to="/login" />;
// };

// export default PrivateRoute;

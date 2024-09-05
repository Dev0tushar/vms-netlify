// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// interface ProtectedRouteProps {
//   component: React.ComponentType;
//   allowedRoutes: string[];
//   redirectPath?: string;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
//   component: Component,
//   allowedRoutes,
//   redirectPath = "/login",
//   ...rest
// }) => {
//   const path = window.location.pathname;

//   // Check if the current path is in the list of allowed routes
//   if (!allowedRoutes.includes(path)) {
//     return <Navigate to={redirectPath} />;
//   }

//   return <Route {...rest} element={<Component />} />;
// };

// export default ProtectedRoute;


import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './Hooks/useAuth'; 

interface ProtectedRouteProps {
  component: React.ComponentType;
  allowedRoutes: string[];
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  allowedRoutes,
  redirectPath = "/login",
  ...rest
}) => {
  const { isAuthenticated } = useAuth(); 
  const path = window.location.pathname;

  if (!isAuthenticated || !allowedRoutes.includes(path)) {
    return <Navigate to={redirectPath} />;
  }

  return <Route {...rest} element={<Component />} />;
};

export default ProtectedRoute;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' ; 
import 'bootstrap/dist/css/bootstrap.min.css';
// import { AuthProvider } from "./Hooks/useAuth";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
 {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </React.StrictMode>,
)

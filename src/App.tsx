

import "./App.css";
import BlockData from "./components/blocks/commanBlock";
import Navbar from "./components/navbar/navbar";
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/login";
import SignUpForm from "./components/pages/SignUp/SignUp";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SideBarMenu from "./components/sideMenu/sideBar";
import AiConfiguration from "./components/pages/aiConfiguration/aiConfiguration";
import DeviceConfiguration from "./components/pages/deviceConfiguration/deviceConfiguration";
import AlertTable from "./components/pages/Alert/Alert";
import AddDeviceForm from "./components/pages/AddDeviceScreen/AddDeviceScreen";
import EditForm from "./components/pages/EditScreen/EditScreen";
import ChartsComponent from "./components/pages/ReportChartScreen/ReportChartScreen";
import Playback from "./components/pages/PlayBackScreen/PlayBackscreen";
import ErrorBoundary from "./components/pages/PlayBackScreen/ErrorBoundary";
import PrivateRoute from "./PrivateRoute";
import UserPage from "./components/pages/UserPage/UserPage";
import { AuthProvider, useAuth } from "./Hooks/useAuth";
import { DeviceProvider } from "./components/pages/deviceConfiguration/ParentDevice";

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route
             path="/"
            element={
                <Home />
            }
          />
          <Route path="/sidebar" element={<SideBarMenu />} />
          <Route path="/liveview" element={<BlockData />} />
          <Route path="/playback" element={<Playback />} />
          <Route path="/reportChart-Screen" element={<ChartsComponent />} />
          <Route path="/alert" element={<AlertTable />} />
          <Route path="/device-config" element={<DeviceConfiguration />} />
          <Route path="/AddDevice-Screen" element={<AddDeviceForm />} />
          <Route path="/ai-config" element={<AiConfiguration />} />
          <Route path="/user-page" element={<UserPage />} />
          <Route path="/Edit-Screen" element={<EditForm />} />
          {/* Redirect any unknown routes to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login setAuthenticate={()=>{}}/>} />
          <Route path="/SignUpForm-screen" element={<SignUpForm />} />

          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

function App() {
  return (
    
    <AuthProvider>
      <DeviceProvider>
        {/* <Router> */}
          <Navbar />
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        {/* </Router> */}
      </DeviceProvider>
    </AuthProvider>
  );
}

export default App;


//   import "./App.css";
//   import BlockData from "./components/blocks/commanBlock";
//   import Navbar from "./components/navbar/navbar";
//   import Home from "./components/pages/home/home";
//   import Login from "./components/pages/login/login";
//   import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//   import SideBarMenu from "./components/sideMenu/sideBar";
//   import AiConfiguration from "./components/pages/aiConfiguration/aiConfiguration";
//   import DeviceConfiguration from "./components/pages/deviceConfiguration/deviceConfiguration";
//   import AlertTable from "./components/pages/Alert/Alert";
//   import AddDeviceForm from "./components/pages/AddDeviceScreen/AddDeviceScreen";
//   import EditForm from "./components/pages/EditScreen/EditScreen";
//   import SignUpForm from "./components/pages/SignUp/SignUp";
//   import ChartsComponent from "./components/pages/ReportChartScreen/ReportChartScreen";
//   import Playback from "./components/pages/PlayBackScreen/PlayBackscreen";
//   import { AuthProvider } from "./Hooks/useAuth";
//   import ErrorBoundary from "./components/pages/PlayBackScreen/ErrorBoundary";
//   import PrivateRoute from "./PrivateRoute";
//   import UserPage from "./components/pages/UserPage/UserPage";
//   import { DeviceProvider } from "./components/pages/deviceConfiguration/ParentDevice";
// import { useState } from "react";
//   function App() {
//     const [isAuthenticated, setAuthenticate] = useState(false);
//     return (
//       <AuthProvider>
//         <DeviceProvider>
//           {/* <Router> */}
//             <Navbar />
//             <ErrorBoundary>
//               <Routes>
//                 <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
//                 <Route path="/SignUpForm-screen" element={<SignUpForm />} />
//                 <Route
//                   path="/"
//                   element={
//                     //  <PrivateRoute>
//                     <Home />
//                       // </PrivateRoute>
//                   }
//                 />
//                 <Route path="/sidebar" element={<SideBarMenu />} />
//                 <Route path="/liveview" element={<BlockData />} />
//                 <Route path="/playback" element={<Playback />} />
//                 <Route path="/reportChart-Screen" element={<ChartsComponent />} />
//                 <Route path="/alert" element={<AlertTable />} />
//                 <Route path="/device-config" element={<DeviceConfiguration />} />
//                 <Route path="/AddDevice-Screen" element={<AddDeviceForm />} />
//                 <Route path="/ai-config" element={<AiConfiguration />} />
//                 <Route path="/user-page" element={<UserPage />}></Route>
//                 <Route path="/AddDevice-Screen" element={<AddDeviceForm />} />
//                 <Route path="/Edit-Screen" element={<EditForm />} />
//               </Routes>
//             </ErrorBoundary>
//           {/* </Router> */}
//         </DeviceProvider>
//       </AuthProvider>
//     );
//   }
//   export default App;

{

  // import "./App.css";
  // import BlockData from "./components/blocks/commanBlock";
  // import Navbar from "./components/navbar/navbar";
  // import Home from "./components/pages/home/home";
  // import Login from "./components/pages/login/login";
  // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  // import SideBarMenu from "./components/sideMenu/sideBar";
  // import AiConfiguration from "./components/pages/aiConfiguration/aiConfiguration";
  // import DeviceConfiguration from "./components/pages/deviceConfiguration/deviceConfiguration";
  // import AlertTable from "./components/pages/Alert/Alert";
  // import AddDeviceForm from "./components/pages/AddDeviceScreen/AddDeviceScreen";
  // import EditForm from "./components/pages/EditScreen/EditScreen";
  // import SignUpForm from "./components/pages/SignUp/SignUp";
  // import ChartsComponent from "./components/pages/ReportChartScreen/ReportChartScreen";
  // import PlayBackScreen from "./components/pages/PlayBackScreen/PlayBackscreen";
  // import { AuthProvider } from "./Hooks/useAuth";
  // import ErrorBoundary from "./components/pages/PlayBackScreen/ErrorBoundary";
  // import ProtectedRoute from "./ProtectedRoute";
  // import PrivateRoute from "./PrivateRoute";
  // function App() {
  //   const allowedRoutes = [
  //     "/",
  //     "/sidebar",
  //     "/liveview",
  //     "/playback",
  //     "/reportChart-Screen",
  //     "/alert",
  //     "/device-config",
  //     "/ai-config",
  //     "/AddDevice-Screen",
  //     "/Edit-Screen",
  //   ];
  //   return (
  //     <AuthProvider>
  //       <Router>
  //         <Navbar />
  //         <ErrorBoundary>
  //           <Routes>
  //             <Route path="/SignUpForm-screen" element={<SignUpForm />} />
  //             <Route path="/login" element={<Login />} />
  //             <Route
  //               path="/"
  //               element={
  //               // <PrivateRoute><Home/></PrivateRoute>
  //                 <ProtectedRoute
  //                   component={Home}
  //                   allowedRoutes={allowedRoutes}
  //                 />
  //               }
  //             />
  //             <Route
  //               path="/sidebar"
  //               element={
  //                 <ProtectedRoute
  //                   component={SideBarMenu}
  //                   allowedRoutes={allowedRoutes}
  //                 />
  //               }
  //             />
  //             <Route
  //               path="/liveview"
  //               element={
  //                 <ProtectedRoute
  //                   component={BlockData}
  //                   allowedRoutes={allowedRoutes}
  //                 />
  //               }
  //             />
  //             <Route
  //               path="/playback"
  //               element={
  //                 <ProtectedRoute
  //                   component={PlayBackScreen}
  //                   allowedRoutes={allowedRoutes}
  //                 />
  //               }
  //             />
  //             <Route
  //               path="/reportChart-Screen"
  //               element={
  //                 <ProtectedRoute
  //                   component={ChartsComponent}
  //                   allowedRoutes={allowedRoutes}
  //                 />
  //               }
  //             />
  //             <Route
  //               path="/alert"
  //               element={
  //                 <ProtectedRoute
  //                   component={AlertTable}
  //                   allowedRoutes={allowedRoutes}
  //                 />
  //               }
  //             />
  //             <Route
  //               path="/device-config"
  //               element={
  //                 <ProtectedRoute
  //                   component={DeviceConfiguration}
  //                   allowedRoutes={allowedRoutes}
  //                 />
  //               }
  //             />
  //             <Route
  //               path="/ai-config"
  //               element={
  //                 <ProtectedRoute
  //                   component={AiConfiguration}
  //                   allowedRoutes={allowedRoutes}
  //                 />
  //               }
  //             />
  //             <Route
  //               path="/AddDevice-Screen"
  //               element={
  //                 <ProtectedRoute
  //                   component={AddDeviceForm}
  //                   allowedRoutes={allowedRoutes}
  //                 />
  //               }
  //             />
  //             <Route
  //               path="/Edit-Screen"
  //               element={
  //                 <ProtectedRoute
  //                   component={EditForm}
  //                   allowedRoutes={allowedRoutes}
  //                 />
  //               }
  //             />
  //           </Routes>
  //         </ErrorBoundary>
  //       </Router>
  //     </AuthProvider>
  //   );
  // }
  // export default App;
}

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
          <Route path="/" element={<Home />} />
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
          <Route path="/login" element={<Login setAuthenticate={() => {}} />} />
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

import "./App.css";
import BlockData from "./components/blocks/commanBlock";
import Navbar from "./components/navbar/navbar";
// import AIConfiguration from "./components/pages/aiConfiguration/aiConfiguration";
// import SideBarMenu from "./components/sideMenu/sideBar";
// import Navbar from "./components/navbar/navbar";
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBarMenu from "./components/sideMenu/sideBar";
import AiConfiguration from "./components/pages/aiConfiguration/aiConfiguration";
import DeviceConfiguration from "./components/pages/deviceConfiguration/deviceConfiguration";
import AlertTable from "./components/pages/Alert/Alert";
import AddDeviceForm from "./components/pages/AddDeviceScreen/AddDeviceScreen";
import EditForm from "./components/pages/EditScreen/EditScreen";
import SignUpForm from "./components/pages/SignUp/SignUp";

import ChartsComponent from "./components/pages/ReportChartScreen/ReportChartScreen";
import PlayBackScreen from "./components/pages/PlayBackScreen/PlayBackscreen";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sidebar" element={<SideBarMenu />} />

          <Route path="/liveview" element={<BlockData />} />
          <Route path="/playback" element={<PlayBackScreen />} />
          <Route path="//reportChart-Screen" element={<ChartsComponent />} />
          <Route path="/alert" element={<AlertTable />} />

          <Route path="/device-config" element={<DeviceConfiguration />} />
          <Route path="/ai-config" element={<AiConfiguration />} />

          <Route path="/AddDevice-Screen" element={<AddDeviceForm />} />
          <Route path="/Edit-Screen" element={<EditForm />} />
          <Route path="/SignUpForm-screen" element={<SignUpForm />} />
        </Routes>
      </Router>
      {/* <SideBarMenu /> */}
    </>
  );
}

export default App;

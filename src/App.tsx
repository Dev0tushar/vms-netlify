import "./App.css";
import BlockData from "./components/blocks/commanBlock";
import Navbar from "./components/navbar/navbar";
// import SideBarMenu from "./components/sideMenu/sideBar";
// import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/live" element={<BlockData />} />
        </Routes>
      </Router>
      {/* <SideBarMenu /> */}
    </>
  );
}

export default App;

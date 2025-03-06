import "./App.css";
import PropsnTypes from "./PropsnTypes";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Navbar />
      {/* Props and types */}
        <Routes>
          <Route path="/" element={<PropsnTypes />} />
          <Route path="/usestate" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import PropsnTypes from "./PropsnTypes";
import StateFul from "./components/Stateful";
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
          <Route path="/state" element={<StateFul />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

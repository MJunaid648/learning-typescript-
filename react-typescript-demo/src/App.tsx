import "./App.css";
import PropsnTypes from "./PropsnTypes";
import StateFul from "./components/Stateful";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Private from "./components/Private";
import Profile from "./components/Profile";

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
        {/* Component as a Prop */}
        <Private isLoggedIn={true} component={Profile}/>
      </Router>
    </>
  );
}

export default App;

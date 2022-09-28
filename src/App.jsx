import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Contacts from "./Components/Contacts";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />{" "}
          <Route path="/Contacts" element={<Contacts />} />{" "}
        </Routes>
        <Main />
      </Router>
    </>
  );
}

export default App;

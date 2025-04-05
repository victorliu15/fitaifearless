import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";

function App() {
  return (
    <Router>
      <div className="h-screen flex bg-primary text-font">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

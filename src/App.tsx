import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home"
import ProjectSelection from "./pages/ProjectSelection";

function App() {
  return (
    <>
      <Router>
      <div className="bg-body min-h-screen">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<ProjectSelection/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

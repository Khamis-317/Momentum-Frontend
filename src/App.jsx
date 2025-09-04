import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage"
import Homepage from "./pages/Homepage";
import SignupAsMentorPage from "./pages/SignupAsMentorPage"
// import AdminDashboardPage from "./pages/AdminDashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path="/signup-mentor" element={<SignupAsMentorPage />} />
      </Routes>
      {/* <Routes>
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      </Routes> */}
    </Router>
  );
}

export default App;

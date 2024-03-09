import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import Header from "./components/Header";
import ChatRoomPage from "./Pages/ChatRoomPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/chat" element={<ChatRoomPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

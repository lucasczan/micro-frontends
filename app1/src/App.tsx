import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<span>About</span>} />
          <Route path="/*" element={<span>Not found</span>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

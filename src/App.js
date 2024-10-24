import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeP from "./pages/HomeP";
import LoginP from "./pages/LoginP";
import SignUpP from "./pages/SignUpP";
import HistoryP from "./pages/HistoryP";
import BookingP from "./pages/BookingP";
import UpdateLoginP from "./pages/UpdateLoginP";

function App() {
  return (
    <>
      <Routes>
        <Route path="/homePage" element={<HomeP />} />
        <Route path="/login" element={<LoginP />} />
        <Route path="/" element={<SignUpP />} />
        <Route path="/history" element={<HistoryP />} />
        <Route path="/bookAppointment" element={<BookingP />} />
        <Route path="/updateLogin" element={<UpdateLoginP />} />
      </Routes>
    </>
  );
}

export default App;

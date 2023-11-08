import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ScrollToTop from "./components/ScrollToTop";
import Government from "./pages/Government";
import Private from "./pages/Private";
import Entrepreneurship from "./pages/Entrepreneurship";
import Footer from "./components/Footer";
import AllTrainings from "./pages/AllTrainings";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/government" element={<Government />} />
        <Route path="/private" element={<Private />} />
        <Route path="/entrepreneurship" element={<Entrepreneurship />} />
        <Route path="/trainings" element={<AllTrainings />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div>
      <Navbar />
      
      <div className="container mt-4">
        <button className="btn btn-primary me-2" onClick={() => setCurrentPage("home")}>Home</button>
        <button className="btn btn-secondary me-2" onClick={() => setCurrentPage("register")}>Registro</button>
        <button className="btn btn-success" onClick={() => setCurrentPage("login")}>Login</button>
      </div>

      {currentPage === "home" && <Home />}
      {currentPage === "register" && <RegisterPage />}
      {currentPage === "login" && <LoginPage />}

      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import { useState } from "react";

function App() {
  const [loggedIn,setLoggedIn] = useState(false)
  return (
    <Router>
      <div className="md:bg-gray-900 bg-gray-500 min-h-screen overflow-x-hidden">
        {/* Sidebar */}
        <div className="fixed md:top-0 md:left-0 bg-gray-800 z-10">
          <Sidebar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        </div>

        {/* Navbar */}
        <div className="fixed top-0 left-0 md:left-64 right-0 h-14 bg-gray-700 z-20 hidden md:block">
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        </div>

        {/* Main Content */}
        <div className="mt-14 md:ml-64">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/products" element={<Products/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

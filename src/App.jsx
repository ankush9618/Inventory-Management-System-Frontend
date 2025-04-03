import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {

  return (
    <>
    <Router>
      <Sidebar/>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App

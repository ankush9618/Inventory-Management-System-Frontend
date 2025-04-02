import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
    <Router>
      <Sidebar/>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App

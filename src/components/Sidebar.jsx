import { NavLink, useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useState, useEffect, useContext } from "react";
import { BsStack } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineInventory2 } from "react-icons/md";
import UserContext from "../context/UserContext";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const {loggedIn,setLoggedIn,user} = useContext(UserContext)
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    try {
      const res = await axiosInstance.post("/users/logout");
      setMenuOpen(false)
      setLoggedIn(false);
      !isMobile && toast.warn(res.data.message);
      navigate("/")
      console.log(res);
    } catch (err) {
      console.error(err);
      toast.error("Logout failed. Please try again.");
    }
  };

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false); // Close menu on large screens
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <div className="flex">
      {/* Sidebar - Always visible on large screens */}
      <aside className="hidden md:block bg-gray-900 text-white w-64 h-screen p-4">
        <h2 className="text-2xl font-bold mb-6 text-center"><NavLink to="/" className="text-yellow-500 flex justify-center gap-2 items-center"><BsStack/>InventoryPro</NavLink></h2>
        <nav className="space-y-4 text-center font-semibold">
          <NavLink to="/dashboard" className={({isActive})=>`block px-4 py-2 rounded bg-gray-700 ${isActive?"bg-gray-700":"bg-gray-900"} flex justify-center items-center gap-2`}>
          <LuLayoutDashboard/>
            Dashboard
          </NavLink>
          <NavLink to="/products" className={({isActive})=>`block px-4 py-2 rounded bg-gray-700 ${isActive?"bg-gray-700":"bg-gray-900"} flex justify-center items-center gap-2`}>
          <AiOutlineProduct className="text-xl"/>
            Products
          </NavLink>
          <NavLink to="/inventory" className={({isActive})=>`block px-4 py-2 rounded bg-gray-700 ${isActive?"bg-gray-700":"bg-gray-900"} flex justify-center items-center gap-2`}>
            <MdOutlineInventory2/>
            Inventory
          </NavLink>
        </nav>
      </aside>

      {/* Small Screen Navbar */}
      <nav className="w-screen h-14 bg-gray-800 text-white flex items-center md:hidden px-4 relative gap-4">
        {/* Menu Button */}
        <button className="text-2xl z-50" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <ImCross className="text-md" /> : <TiThMenu className="text-3xl"/>}
        </button>
        {/* App Name - Always Centered */}
        <h2 className="text-2xl font-bold text-center w-full"><NavLink to="/" className="text-yellow-500 flex justify-center gap-2 items-center"><BsStack/>InventoryPro</NavLink></h2>
        <NavLink to="/users/profile"><img src={user.avatar} alt="" className="w-12 rounded-full"/></NavLink>
      </nav>

    </div>
    {menuOpen && <div className="inset-0 bg-gray-800 h-screen w-screen fixed">
      <nav className="w-screen h-14 bg-gray-800 text-white flex items-center md:hidden px-4 gap-4 absolute">
        {/* Menu Button */}
        <button className="text-2xl z-50" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <ImCross className="text-md" /> : <TiThMenu className="text-3xl"/>}
        </button>
        {/* App Name - Always Centered */}
        <h2 className="text-2xl font-bold text-center w-full" onClick={() => setMenuOpen(!menuOpen)}><NavLink to="/" className="text-yellow-500 flex justify-center gap-2 items-center"><BsStack/>InventoryPro</NavLink></h2>
        <NavLink to="/users/profile" onClick={()=>setMenuOpen(false)}><img src={user.avatar} alt="" className="h-8 rounded-3xl"/></NavLink>
      </nav>
        <nav className="space-y-4 border-t-1 border-white text-center font-semibold text-white relative top-14">
          <NavLink
            to="/dashboard"
            className="block px-4 py-2 rounded hover:bg-gray-700 text-xl mt-5"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex justify-center items-center gap-2"><LuLayoutDashboard/>
            Dashboard</div>
          </NavLink>
          <NavLink
            to="/products"
            className="block px-4 py-2 rounded hover:bg-gray-700 text-xl"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex justify-center items-center gap-2"><AiOutlineProduct className="text-xl"/>
            Products</div>
            
          </NavLink>
          <NavLink
            to="/inventory"
            className="block px-4 py-2 rounded hover:bg-gray-700 text-xl"
            onClick={() => setMenuOpen(false)}
          ><div className="flex justify-center items-center gap-2"><MdOutlineInventory2/>
            Inventory</div>
          </NavLink>
          {loggedIn?<div
            className="block px-4 py-2 rounded hover:bg-gray-700 text-xl"
            onClick={handleLogout}
          ><div className="flex justify-center items-center gap-2">
            Logout</div>
          </div>:<NavLink
            to="/login"
            className=" px-4 py-2 rounded hover:bg-gray-700 text-xl w-full flex justify-center"
            onClick={() => setMenuOpen(false)}
          ><div className="bg-sky-300 px-2 py-1 w-4/5 text-center">
            Login/SignUp</div>
          </NavLink>}
        </nav></div>}
    </>
  );
}

export default Sidebar;

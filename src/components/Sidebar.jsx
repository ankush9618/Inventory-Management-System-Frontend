import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";
import { BsStack } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
    <div className="flex md:w-64 w-full md:absolute">
      {/* Sidebar - Always visible on large screens */}
      <aside className="hidden md:block bg-gray-900 text-white w-64 h-screen p-4">
        <h2 className="text-2xl font-bold mb-6 text-center"><NavLink to="/" className="text-yellow-500 flex justify-center gap-2 items-center"><BsStack/>InventoryPro</NavLink></h2>
        <nav className="space-y-4 text-center font-semibold">
          <NavLink to="/dashboard" className={({isActive})=>`block px-4 py-2 rounded bg-gray-700 ${isActive?"bg-gray-700":"bg-gray-900"} flex justify-center items-center gap-2`}>
          <LuLayoutDashboard/>
            Dashboard
          </NavLink>
          <NavLink to="/products" className={({isActive})=>`block px-4 py-2 rounded bg-gray-700 ${isActive?"bg-gray-700":"bg-gray-900"}`}>
            Add Products
          </NavLink>
          <NavLink to="/inventory" className={({isActive})=>`block px-4 py-2 rounded bg-gray-700 ${isActive?"bg-gray-700":"bg-gray-900"}`}>
            Inventory
          </NavLink>
        </nav>
      </aside>

      {/* Small Screen Navbar */}
      <nav className="w-full h-14 bg-gray-800 text-white flex items-center md:hidden px-4 relative gap-4">
        {/* Menu Button */}
        <button className="text-2xl z-50" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <ImCross className="text-md" /> : <TiThMenu className="text-3xl"/>}
        </button>
        {/* App Name - Always Centered */}
        <h2 className="text-2xl font-bold text-center w-full"><NavLink to="/" className="text-yellow-500 flex justify-center gap-2 items-center"><BsStack/>InventoryPro</NavLink></h2>
        <img src="https://res.cloudinary.com/daootd1uo/image/upload/v1742757690/qi1onwszqlq6cxtcpm5b.png" alt="" className="h-8 rounded-3xl"/>
      </nav>

    </div>
    {menuOpen && <div className="inset-0 bg-gray-800 h-screen w-screen">
        <nav className="space-y-4 border-t-1 border-white text-center font-semibold text-white">
          <NavLink
            to="/dashboard"
            className="block px-4 py-2 rounded hover:bg-gray-700 text-xl"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex justify-center items-center gap-2"><LuLayoutDashboard/>
            Dashboard</div>
          </NavLink>
          <NavLink
            to="/products"
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/inventory"
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Inventory
          </NavLink>
        </nav></div>}
    </>
  );
}

export default Sidebar;

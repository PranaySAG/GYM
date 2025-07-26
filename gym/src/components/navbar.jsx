import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const {
    user,
    setUser,
    showUserLogin,
    setShowUserLogin,
    searchQuery,
    setSearchQuery,
    cartCount,
    axios,
  } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        setUser(null);
        navigate("/");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (searchQuery?.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".user-dropdown")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-white shadow">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold text-indigo-600">
          GroceryApp
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products"
            className="border rounded px-2 py-1"
          />

          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            🛒
            <span className="absolute -top-1 -right-2 bg-indigo-500 text-white text-xs rounded-full px-1">
              {cartCount()}
            </span>
          </div>

          {user ? (
            <div className="relative user-dropdown">
              <img
                src={assets?.profile_icon || "/default-avatar.png"}
                alt="profile"
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-md z-50">
                  <button
                    onClick={() => {
                      navigate("/my-orders");
                      setShowDropdown(false);
                    }}
                    className="px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100"
                  >
                    My Orders
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      setShowDropdown(false);
                    }}
                    className="px-4 py-2 w-full text-left text-red-600 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setShowUserLogin(true)}
              className="px-4 py-1 bg-indigo-500 text-white rounded"
            >
              Login
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <img
            src={menuOpen ? "/assets/close.svg" : "/assets/menu.svg"}
            alt="menu"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow px-4 py-2"
          >
            <Link to="/" className="block py-1" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link
              to="/products"
              className="block py-1"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
            <div
              onClick={() => {
                navigate("/cart");
                setMenuOpen(false);
              }}
              className="py-1 cursor-pointer"
            >
              🛒 Cart ({cartCount()})
            </div>
            {user ? (
              <>
                <div
                  onClick={() => {
                    navigate("/my-orders");
                    setMenuOpen(false);
                  }}
                  className="py-1 cursor-pointer"
                >
                  My Orders
                </div>
                <div
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="py-1 cursor-pointer text-red-600"
                >
                  Logout
                </div>
              </>
            ) : (
              <button
                onClick={() => {
                  setShowUserLogin(true);
                  setMenuOpen(false);
                }}
                className="w-full mt-2 bg-indigo-500 text-white px-4 py-1 rounded"
              >
                Login
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

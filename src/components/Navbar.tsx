
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, Menu, X, User } from "lucide-react";
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, isAdmin, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
            QuickBite
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-800 hover:text-blue-500 transition-colors font-medium">
            Home
          </Link>
          <Link to="/services" className="text-gray-800 hover:text-blue-500 transition-colors font-medium">
            Services
          </Link>
          <Link to="/spoon" className="text-gray-800 hover:text-blue-500 transition-colors font-medium">
            Spoon
          </Link>
          <Link to="/zaika" className="text-gray-800 hover:text-blue-500 transition-colors font-medium">
            Zaika
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-500 transition-colors font-medium">
            Contact
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-500 transition-colors font-medium">
            About
          </Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to={isAdmin ? "/admin" : "/profile"}>
                <Button variant="outline" className="btn-hover flex items-center gap-2">
                  <User size={16} />
                  {isAdmin ? 'Dashboard' : 'My Account'}
                </Button>
              </Link>
              <Button variant="ghost" className="btn-hover" onClick={logout}>
                Sign Out
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="outline" className="btn-hover">Sign In</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-blue-500 transition-colors font-medium p-2">
              Home
            </Link>
            <Link to="/services" className="text-gray-800 hover:text-blue-500 transition-colors font-medium p-2">
              Services
            </Link>
            <Link to="/spoon" className="text-gray-800 hover:text-blue-500 transition-colors font-medium p-2">
              Spoon
            </Link>
            <Link to="/zaika" className="text-gray-800 hover:text-blue-500 transition-colors font-medium p-2">
              Zaika
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-500 transition-colors font-medium p-2">
              Contact
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-500 transition-colors font-medium p-2">
              About
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to={isAdmin ? "/admin" : "/profile"} className="p-2">
                  <Button className="w-full flex items-center justify-center gap-2">
                    <User size={16} />
                    {isAdmin ? 'Dashboard' : 'My Account'}
                  </Button>
                </Link>
                <Button variant="outline" className="w-full" onClick={logout}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button className="w-full">Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

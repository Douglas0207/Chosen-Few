
import React, { useState, useEffect } from "react";
import { Cross, Heart, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Testimonies", href: "#testimonies" },
    { name: "Prayer Wall", href: "#prayer-wall" },
    { name: "Meetings", href: "#meetings" },
    // { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`py-4 px-4 md:px-8 transition-all duration-300 z-50 ${isSticky ? 'sticky-navbar' : ''}`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <img src="/lovable-uploads/3bd29f4e-11b8-47a8-bfe4-dd89214b4efc.png" alt="Chosen Few Logo" className="h-10 w-10 rounded-full" />
          <div className="font-serif">
            <h1 className="text-xl font-bold text-chosen-orange">Chosen Few</h1>
            <p className="text-xs text-gray-500">To create a generation of worship leaders!!</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium hover:text-chosen-orange transition-colors duration-200 scroll-animation"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#prayer-request" 
            className="bg-chosen-orange text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-amber-600 transition-colors duration-200 button-animation"
          >
            <Heart size={16} />
            <span>Prayer Request</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-chosen-orange"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Cross size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-4 mt-4 rounded-lg shadow-md animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium py-2 hover:text-chosen-orange transition-colors duration-200"
                onClick={handleNavLinkClick}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#prayer-request" 
              className="bg-chosen-orange text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-amber-600 transition-colors duration-200"
              onClick={handleNavLinkClick}
            >
              <Heart size={16} />
              <span>Prayer Request</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

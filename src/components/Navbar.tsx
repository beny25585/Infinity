import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiImage,
  FiInfo,
  FiMail,
  FiVideo,
} from "react-icons/fi";
import { Sling as Hamburger } from "hamburger-react";

function CustomNavbar() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false); // סגירת התפריט
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-lg text-white transition-all duration-300">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* כפתור המבורגר - צד שמאל */}
        <div className="order-3 lg:hidden">
          <Hamburger
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
          />
        </div>

        {/* תפריט רגיל במסכים גדולים - מרכז */}
        <div className="hidden lg:flex gap-8 items-center text-lg order-2 ml-50">
          <NavLink icon={<FiHome />} to="/" label="ראשי" />
          <NavLink icon={<FiImage />} to="/Gallery" label="תמונות" />
          <NavLink icon={<FiVideo />} to="/Videos" label="סרטונים" />
          <NavLink icon={<FiInfo />} to="/about" label="אודות" />
          <NavLink icon={<FiMail />} to="/Contact" label="השאירו פרטים" />
        </div>

        {/* לוגו - צד ימין */}
        <Link to="/" className="order-1">
          <img
            src="/logos/IMG-20250516-WA0003.jpg"
            alt="Infinity Logo"
            className="h-24 w-auto object-contain hover:opacity-90 transition-opacity duration-300"
          />
        </Link>
      </div>

      {/* תפריט צד מרחף במסכים קטנים */}
      <div
        ref={menuRef}
        className={`fixed top-16 right-4 w-64 bg-gray-900/90 backdrop-blur-lg shadow-xl rounded-xl p-6 space-y-4 text-white z-50 transform transition-all duration-300 ${
          isMenuOpen
            ? "translate-x-0 opacity-100 mt-4"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <NavLink
          icon={<FiHome />}
          to="/"
          label="ראשי"
          onClick={() => setIsMenuOpen(false)}
        />
        <NavLink
          icon={<FiUsers />}
          to="/Team"
          label="הצוות שלנו"
          onClick={() => setIsMenuOpen(false)}
        />
        <NavLink
          icon={<FiImage />}
          to="/Gallery"
          label="תמונות"
          onClick={() => setIsMenuOpen(false)}
        />
        <NavLink
          icon={<FiVideo />}
          to="/Videos"
          label="סירטונים"
          onClick={() => setIsMenuOpen(false)}
        />
        <NavLink
          icon={<FiInfo />}
          to="/about"
          label="אודות"
          onClick={() => setIsMenuOpen(false)}
        />
        <NavLink
          icon={<FiMail />}
          to="/Contact"
          label="השאירו פרטים"
          onClick={() => setIsMenuOpen(false)}
        />
      </div>
    </nav>
  );
}

// קומפוננטת קישור עם אייקון
function NavLink({ to, label, icon, onClick }: any) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 text-lg hover:text-blue-400 transition"
    >
      {icon}
      {label}
    </Link>
  );
}

export default CustomNavbar;

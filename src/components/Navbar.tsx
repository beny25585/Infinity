import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUsers, FiInfo, FiMail } from "react-icons/fi";
import { Sling as Hamburger } from "hamburger-react";
import { HiOutlinePhotograph } from "react-icons/hi";
import GalleryMobile from "../pages/Gallery";

function CustomNavbar() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
        setIsMenuOpen(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ height: 80 }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto h-full px-6 lg:px-12">
        {/* תפריט רגיל למסכים גדולים */}
        <div className="hidden lg:flex gap-12 items-center order-2">
          <NavLink
            icon={<FiHome />}
            to="/"
            label="ראשי"
            active={location.pathname === "/"}
          />
          <NavLink
            icon={<FiUsers />}
            to="/Team"
            label="הצוות שלנו"
            active={location.pathname === "/Team"}
          />
          <NavLink
            icon={<HiOutlinePhotograph />}
            to="/gallery"
            label="גלריה"
            active={location.pathname === "/gallery"}
          />

          <NavLink
            icon={<FiInfo />}
            to="/about"
            label="אודות"
            active={location.pathname === "/about"}
          />
          <NavLink
            icon={<FiMail />}
            to="/Contact"
            label="השאירו פרטים"
            active={location.pathname === "/Contact"}
          />
        </div>

        {/* תפריט צד וכפתור המבורגר למסכים קטנים */}
        <div ref={wrapperRef} className="lg:hidden order-3 relative">
          <Hamburger
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            size={28}
            color="#3b82f6"
          />

          <div
            className={`fixed top-20 right-6 w-64 bg-gray-900/95 backdrop-blur-md shadow-xl rounded-2xl p-6 space-y-6 text-white z-50 transform transition-all duration-300 ${
              isMenuOpen
                ? "translate-x-0 opacity-100 pointer-events-auto"
                : "translate-x-full opacity-0 pointer-events-none"
            }`}
          >
            <NavLink
              icon={<FiHome />}
              to="/"
              label="ראשי"
              active={location.pathname === "/"}
              onClick={() => setIsMenuOpen(false)}
            />
            <NavLink
              icon={<FiUsers />}
              to="/Team"
              label="הצוות שלנו"
              active={location.pathname === "/Team"}
              onClick={() => setIsMenuOpen(false)}
            />
            <NavLink
              icon={<HiOutlinePhotograph />}
              to="/gallery"
              label="גלריה"
              active={location.pathname === "/gallery"}
              onClick={() => setIsMenuOpen(false)}
            />

            <NavLink
              icon={<FiInfo />}
              to="/about"
              label="אודות"
              active={location.pathname === "/about"}
              onClick={() => setIsMenuOpen(false)}
            />
            <NavLink
              icon={<FiMail />}
              to="/Contact"
              label="השאירו פרטים"
              active={location.pathname === "/Contact"}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, label, icon, onClick, active }: any) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-2 text-lg font-medium transition-colors ${
        active
          ? "text-blue-400 font-bold underline decoration-2 decoration-blue-400"
          : "text-white hover:text-blue-400"
      }`}
      aria-current={active ? "page" : undefined}
    >
      <span className="text-xl">{icon}</span>
      {label}
    </Link>
  );
}

export default CustomNavbar;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiInfo,
  FiMail,
  FiTarget,
  FiStar,
  FiBookOpen,
} from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTiktok,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Sling as Hamburger } from "hamburger-react";

function CustomNavbar() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleclickoutside = (event: MouseEvent) => {
      if (!isMenuOpen) return;

      const target = event.target as Node;
      const isClickInsideMenu =
        menuRef.current && menuRef.current.contains(target);
      const isClickInsideHamburger =
        wrapperRef.current && wrapperRef.current.contains(target);

      if (!isClickInsideMenu && !isClickInsideHamburger) {
        setIsMenuOpen(false);
        console.log("click outside");
      }
    };
    document.addEventListener("mousedown", handleclickoutside);
    return () => document.removeEventListener("mousedown", handleclickoutside);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="flex items-center justify-between h-30 px-4 lg:px-8">
          <div ref={wrapperRef}>
            <Hamburger
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              size={28}
              color="black"
            />
          </div>

          <div className="flex flex-col items-center flex-1">
            <div className="text-black text-3xl font-bold font-serif tracking-wide mb-2">
              InFinity
            </div>

            <div className="flex items-center justify-center gap-4 text-2xl">
              <a
                href="https://wa.me/972559696929"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110"
                style={{ color: "#25D366" }}
                title="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>

              <a
                href="https://www.instagram.com/infinity.kosherkravi?igsh=NGM3dmg0YW52ejgy"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110"
                style={{ color: "#E4405F" }}
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://www.facebook.com/share/15Q4Ue6CT8/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110"
                style={{ color: "#1877F2" }}
                title="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                href="https://www.tiktok.com/@infinity.kosherkravi?_t=ZN-8xiVr8iNWNy&_r=1"
                target="_blank"
                rel="noreferrer"
                className="text-transparent text-black font-bold transition-transform hover:scale-110"
                title="TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>

              <a
                href="https://www.youtube.com/@InFinity.KosherKravi"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110"
                style={{ color: "#FF0000" }}
                title="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          {/* Spacer div to balance the layout */}
          <div className="w-[44px]"></div>
        </div>

        <div
          ref={menuRef}
          className={`fixed top-20 right-6 w-64 bg-white text-white shadow-xl rounded-2xl p-6 space-y-6 z-50 transition-all duration-300 ${
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
          />
          <NavLink
            icon={<FiTarget />}
            to="/ProductsPage"
            label="תכניות אינפיניטי"
            active={location.pathname === "/ProductsPage"}
          />
          <NavLink
            icon={<FiBookOpen />}
            to="/PracticalTrainingPage"
            label="הדרכה פרקטית"
            active={location.pathname === "/PracticalTrainingPage"}
          />
          <NavLink
            icon={<FiStar />}
            to="/TestimonialsPage"
            label="חניכים מספרים"
            active={location.pathname === "/TestimonialsPage"}
          />
          <NavLink
            icon={<FiUsers />}
            to="/Team"
            label="הצוות שלנו"
            active={location.pathname === "/Team"}
          />
          <NavLink
            icon={<FiInfo />}
            to="/About"
            label="אודות"
            active={location.pathname === "/About"}
          />
          <NavLink
            icon={<FiMail />}
            to="/Contact"
            label="השאירו פרטים"
            active={location.pathname === "/Contact"}
          />
        </div>
      </nav>

      <div className="h-16"></div>
    </>
  );
}

function NavLink({
  to,
  label,
  icon,
  active,
}: {
  to: string;
  label: string;
  icon: React.ReactElement;
  active: boolean;
}) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 text-lg font-semibold ${
        active
          ? " !text-black visited:!text-black hover:!text-black "
          : " !text-green-800 visited:!text-green-800 hover:!text-green-800 "
      }`}
    >
      <span className="text-xl">{icon}</span>
      {label}
    </Link>
  );
}

export default CustomNavbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white font-sans" dir="rtl">
      <style>
        {`
          :root {
            --primary: #ff4d4d;
            --primary-dark: #cc3d3d;
            --accent: #4dffff;
            --text: #ffffff;
            --bg-dark: #121212;
            --bg-darker: #0a0a0a;
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          .hover-scale {
            transition: transform 0.3s ease;
          }
          
          .hover-scale:hover {
            transform: scale(1.03);
          }

          .gradient-text {
            background: linear-gradient(45deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }

          .gradient-border {
            position: relative;
            border-radius: 0.5rem;
            overflow: hidden;
          }
          
          .gradient-border::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 0.5rem;
            padding: 2px;
            background: linear-gradient(45deg, var(--primary), var(--accent));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
          }
        `}
      </style>

      <header className={`px-6 py-4 transition-all duration-300 sticky top-0 z-50 ${isScrolled ? 'bg-[var(--bg-darker)] shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center relative">
          <Link to={createPageUrl("Home")} className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold gradient-text">INFINITY</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to={createPageUrl("Home")} className={`text-sm font-medium hover:text-[var(--primary)] transition-colors ${currentPageName === "Home" ? "text-[var(--primary)]" : "text-white"}`}>
              ראשי
            </Link>
            <Link to={createPageUrl("Classes")} className={`text-sm font-medium hover:text-[var(--primary)] transition-colors ${currentPageName === "Classes" ? "text-[var(--primary)]" : "text-white"}`}>
              אימונים
            </Link>
            <Link to={createPageUrl("Trainers")} className={`text-sm font-medium hover:text-[var(--primary)] transition-colors ${currentPageName === "Trainers" ? "text-[var(--primary)]" : "text-white"}`}>
              מאמנים
            </Link>
            <Link to={createPageUrl("About")} className={`text-sm font-medium hover:text-[var(--primary)] transition-colors ${currentPageName === "About" ? "text-[var(--primary)]" : "text-white"}`}>
              אודות
            </Link>
            <Link to={createPageUrl("Contact")} className={`text-sm font-medium hover:text-[var(--primary)] transition-colors ${currentPageName === "Contact" ? "text-[var(--primary)]" : "text-white"}`}>
              צור קשר
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link to={createPageUrl("Contact")} className="px-6 py-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-medium rounded-md transition-colors">
              הרשמה לאימון
            </Link>
          </div>

          {/* Mobile Nav Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <div
          className={`md:hidden absolute top-full right-0 left-0 bg-black bg-opacity-95 transition-all duration-300 z-50 border-t border-gray-800 ${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              to={createPageUrl("Home")}
              onClick={closeMenu}
              className={`py-3 border-b border-gray-800 ${
                currentPageName === "Home" ? "text-[var(--primary)]" : "text-white"
              }`}
            >
              ראשי
            </Link>
            <Link
              to={createPageUrl("Classes")}
              onClick={closeMenu}
              className={`py-3 border-b border-gray-800 ${
                currentPageName === "Classes" ? "text-[var(--primary)]" : "text-white"
              }`}
            >
              אימונים
            </Link>
            <Link
              to={createPageUrl("Trainers")}
              onClick={closeMenu}
              className={`py-3 border-b border-gray-800 ${
                currentPageName === "Trainers" ? "text-[var(--primary)]" : "text-white"
              }`}
            >
              מאמנים
            </Link>
            <Link
              to={createPageUrl("About")}
              onClick={closeMenu}
              className={`py-3 border-b border-gray-800 ${
                currentPageName === "About" ? "text-[var(--primary)]" : "text-white"
              }`}
            >
              אודות
            </Link>
            <Link
              to={createPageUrl("Contact")}
              onClick={closeMenu}
              className={`py-3 border-b border-gray-800 ${
                currentPageName === "Contact" ? "text-[var(--primary)]" : "text-white"
              }`}
            >
              צור קשר
            </Link>
            <Link
              to={createPageUrl("Contact")}
              onClick={closeMenu}
              className="mt-4 px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-medium rounded-md transition-colors text-center"
            >
              הרשמה לאימון
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[var(--bg-darker)] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">INFINITY</h3>
              <p className="text-gray-400 mb-4">
                אימוני כושר קרבי בשיטה ייחודית המשלבת כוח, אנדורנס וטכניקה. 
                מתאמנים ללא גבולות, ללא הגבלה.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">קישורים מהירים</h3>
              <ul className="space-y-3">
                <li><Link to={createPageUrl("Home")} className="text-gray-400 hover:text-[var(--primary)] transition-colors">ראשי</Link></li>
                <li><Link to={createPageUrl("Classes")} className="text-gray-400 hover:text-[var(--primary)] transition-colors">אימונים</Link></li>
                <li><Link to={createPageUrl("Trainers")} className="text-gray-400 hover:text-[var(--primary)] transition-colors">מאמנים</Link></li>
                <li><Link to={createPageUrl("About")} className="text-gray-400 hover:text-[var(--primary)] transition-colors">אודות</Link></li>
                <li><Link to={createPageUrl("Contact")} className="text-gray-400 hover:text-[var(--primary)] transition-colors">צור קשר</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">צור קשר</h3>
              <address className="not-italic">
                <p className="text-gray-400 mb-2">רח׳ ההגנה 23, תל אביב</p>
                <p className="text-gray-400 mb-2">טלפון: 03-1234567</p>
                <p className="text-gray-400 mb-2">מייל: info@infinity-fitness.co.il</p>
              </address>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Infinity Fitness. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
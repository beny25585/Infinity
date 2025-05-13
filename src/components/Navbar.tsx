import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      <nav className="bg-black text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div  className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-cyan-400">
           <div href="/"> INFINITY</div>
          </div>

          {/* קישורים */}
          <div className="hidden md:flex gap-6 text-sm font-light ">
            <a href="/" className="hover:text-red-500 transition ">ראשי</a>
            <a href="/Team" className="hover:text-red-500 transition">הצוות שלנו</a>
            <a href="/FAQs" className="hover:text-red-500 transition">שאלות נפוצות </a>
            <a href="/about" className="hover:text-red-500 transition">אודות</a>
            <a href="/contact" className="hover:text-red-500 transition">צור קשר</a>
          </div>

          {/* כפתור הרשמה */}
          <a
            href="/Contact"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
          >
          השאירו פרטים  
         </a>

        </div>
      </nav>

      {/* מרווח מתחת לניווט */}
      <div className="h-20"></div>

      {/* תפריט קטן לנייד - כפתור המבורגר + תפריט צד */}
      <div className="md:hidden fixed top-4 right-4 z-50 group">
        <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-cyan-400 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer">
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </div>

        <div className="absolute top-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
          <ul className="space-y-3 text-right">
            <li><a href="/" className="text-gray-800 hover:text-cyan-500 transition">ראשי</a></li>
            <li><a href="/trainers" className="text-gray-800 hover:text-cyan-500 transition">מאמנים</a></li>
            <li><a href="/programs" className="text-gray-800 hover:text-cyan-500 transition">אימונים</a></li>
            <li><a href="/about" className="text-gray-800 hover:text-cyan-500 transition">אודות</a></li>
            <li><a href="/contact" className="text-gray-800 hover:text-cyan-500 transition">צור קשר</a></li>
            <li><a href="/signup" className="block mt-4 bg-red-500 hover:bg-red-600 text-white text-center py-2 rounded-md transition">הרשמה לאימון</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

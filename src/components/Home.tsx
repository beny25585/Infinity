import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="">
      {/* טקסטורה עדינה ברקע */}

      <div className="relative container mx-auto px-6 max-w-7xl z-10">
        {/* לוגו למעלה */}
        <div className="flex justify-center mb-12">
          <Link to="/">
            <img
              src="/logos/IMG-20250516-WA0003.jpg"
              alt="Infinity Logo"
              className="h-28 object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* כותרת פתיחה */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              ברוכים הבאים ל-Infinity Kosher
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            כאן תוכלו למצוא את כל המידע על האימונים שלנו, המאמנים,
            והפעילויות המיוחדות. זה המקום להתחיל בו את השינוי שלכם.
          </p>
        </div>

        {/* בלוק קריאה לפעולה */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/Contact"
            className="px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300"
          >
            התחילו את המסע שלכם
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

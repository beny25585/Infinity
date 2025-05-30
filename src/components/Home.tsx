import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="relative container mx-auto max-w-7xl ">
        {/* לוגו למעלה */}
        <div className="flex justify-center ">
          <Link to="/">
            <img
              src="/logos/IMG-20250516-WA0004.jpg"
              alt="Infinity Logo"
              className="h-28 object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* כותרת פתיחה */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400">
            INFINITY KOSHER KRAVI MENTALI
            אינפיניטי כושר קרבי מנטלי
            </span>
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
            כאן תוכלו למצוא את כל המידע על האימונים שלנו, המאמנים, והפעילויות
            המיוחדות. זה המקום להתחיל בו את השינוי שלכם.
          </p>
        </div>

        {/* בלוק קריאה לפעולה */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/Contact"
            className="px-10 py-4 bg-gradient-to-r from-blue-600 via-sky-500 to-green-400 rounded-full text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300"
          >
            התחילו את המסע שלכם
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="  pt-8 pb-12  text-black">
      <div className="container  max-w-7xl px-6 lg:px-12"> 
        {/*להוסיף לוגו*/}


        {/* כותרת פתיחה */}
        <div className="text-center space-y-6 border-b border-green-600 max-w-xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-md">
            <span className="block text-black">InFinity </span>
            <span className="block ">אינפיניטי כושר קרבי מנטלי</span>
            <span className="block text-xl">
              אינפיניטי ! לא רק כושר קרבי גם הכנה לחיים
            </span>
          </h1>
          <p className="text-lg sm:text-xl  max-w-2xl mx-auto leading-relaxed">
            כאן תוכלו למצוא את כל המידע על האימונים שלנו, המאמנים, והפעילויות
            המיוחדות. זה המקום להתחיל בו את השינוי שלכם.
          </p>
        </div>

        {/* כפתור קריאה לפעולה */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/Contact"
            className="px-8 py-4 bg-green-800 text-center text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-300"
          >
            להצטרפות למשפחת אינפיניטי{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
